import React, { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { menuData } from './data/menuData';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import FloatingCartButton from './components/cart/FloatingCartButton';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, XCircle } from 'lucide-react';
import { Button } from './components/ui/Button';
import { FoodCardSkeleton } from './components/ui/Skeleton';
import Footer from './components/Footer';

// Lazy load heavy components
const FoodCard = lazy(() => import('./components/menu/FoodCard'));
const CartSidebar = lazy(() => import('./components/cart/CartSidebar'));
const CheckoutModal = lazy(() => import('./components/checkout/CheckoutModal'));

const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages"];

// Internal component to handle the floating button with access to useCart()
const MobileCartWrapper = ({ onToggle }) => {
  const { cartCount } = useCart();
  return (
    <div className="lg:hidden">
      <FloatingCartButton onClick={onToggle} cartCount={cartCount} />
    </div>
  );
};

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showVegOnly, setShowVegOnly] = useState(false);

  // Performance: Memoize filtered menu
  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !showVegOnly || item.isVeg;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, showVegOnly]);

  const trendingItems = useMemo(() => 
    menuData.filter(item => item.isPopular),
  []);

  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);
  const toggleCheckout = useCallback(() => setIsCheckoutOpen(prev => !prev), []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FDFBF7] selection:bg-primary/20">
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1A1A1A',
              color: '#fff',
              borderRadius: '1.5rem',
              padding: '1.2rem 1.8rem',
              fontSize: '14px',
              fontWeight: 'bold',
              border: '1px solid rgba(212,175,55,0.2)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }
          }} 
        />
        
        <Header onCartOpen={toggleCart} />
        
        <main className="pb-32">
          <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Trending Section */}
          {!searchQuery && activeCategory === "All" && (
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 md:px-8 mb-24 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-2 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                  <h3 className="font-serif text-4xl font-bold text-secondary italic tracking-tight">Trending Now</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden">
                <motion.div 
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex gap-8 w-max hover:[animation-play-state:paused]"
                >
                  <Suspense fallback={[...Array(4)].map((_, i) => <FoodCardSkeleton key={i} />)}>
                    {[...trendingItems, ...trendingItems].map((item, index) => (
                      <div key={`${item.id}-${index}`} className="w-[320px] md:w-[380px] flex-shrink-0">
                        <FoodCard item={item} />
                      </div>
                    ))}
                  </Suspense>
                </motion.div>
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FDFBF7] to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FDFBF7] to-transparent pointer-events-none z-10" />
              </div>
            </motion.section>
          )}

          {/* Filters & Grid Section */}
          <section className="container mx-auto px-4 md:px-8">
            <div className="sticky top-24 z-40 -mx-4 px-4 md:mx-0 md:px-0 mb-12">
              <div className="bg-white/80 backdrop-blur-2xl p-4 md:p-6 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                        activeCategory === cat
                          ? 'bg-secondary text-white shadow-2xl shadow-secondary/20'
                          : 'bg-transparent text-gray-400 hover:text-secondary hover:bg-gray-50'
                      }`}
                      aria-pressed={activeCategory === cat}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
                  <div className="flex items-center gap-4 bg-gray-50/50 px-6 py-3 rounded-2xl border border-gray-100/50">
                    <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                    <label className="flex items-center cursor-pointer group">
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={showVegOnly}
                          onChange={() => setShowVegOnly(!showVegOnly)}
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300 shadow-inner"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5 shadow-sm"></div>
                      </div>
                      <span className="ml-3 text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-secondary transition-colors">Pure Veg</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence mode='wait'>
              {filteredMenu.length > 0 ? (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
                >
                  <Suspense fallback={[...Array(8)].map((_, i) => <FoodCardSkeleton key={i} />)}>
                    {filteredMenu.map((item) => (
                      <FoodCard key={item.id} item={item} />
                    ))}
                  </Suspense>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-32 text-center"
                >
                  <XCircle className="w-24 h-24 text-gray-200 mb-8" />
                  <h3 className="font-serif text-3xl font-bold text-secondary mb-4">No Delicacies Found</h3>
                  <Button variant="outline" onClick={() => { setActiveCategory("All"); setSearchQuery(""); setShowVegOnly(false); }}>Reset All Filters</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>

        <Footer />

        {/* Global Overlays */}
        <Suspense fallback={null}>
          <CartSidebar 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            onCheckout={() => {
              setIsCartOpen(false);
              setIsCheckoutOpen(true);
            }}
          />
          <CheckoutModal 
            isOpen={isCheckoutOpen} 
            onClose={() => setIsCheckoutOpen(false)} 
          />
        </Suspense>

        <MobileCartWrapper onToggle={toggleCart} />
      </div>
    </CartProvider>
  );
}

export default App;
