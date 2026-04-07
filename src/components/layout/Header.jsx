import React, { memo } from 'react';
import { ShoppingCart, UtensilsCrossed, User } from 'lucide-react';
import { useCart } from "../../context/CartContext";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const Header = memo(({ onCartOpen }) => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-primary/10 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="bg-secondary p-3.5 rounded-[1.2rem] group-hover:bg-primary transition-all duration-500 shadow-xl shadow-secondary/10 group-hover:shadow-primary/20 rotate-0 group-hover:rotate-6">
            <UtensilsCrossed className="text-white w-7 h-7" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-secondary">
              RIZWAN <span className="text-primary font-light italic">HOTEL</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-primary/40"></span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold -mt-0.5">
                EST. 1995 | FINE DINING
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-3 sm:gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex rounded-full text-gray-400 hover:text-secondary"
            aria-label="User account"
          >
            <User className="w-6 h-6" />
          </Button>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group hidden lg:block"
          >
            <Button
              variant="secondary"
              size="icon"
              onClick={onCartOpen}
              className="relative rounded-2xl h-14 w-14 shadow-xl shadow-secondary/10 group-hover:bg-primary transition-colors duration-500 overflow-hidden"
              aria-label={`Open cart, ${cartCount} items`}
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <ShoppingCart className="w-6 h-6 relative z-10 transition-colors group-hover:text-white" />
              
              {cartCount > 0 && (
                <motion.span 
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1.1, 1] }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-[3px] border-[#FDFBF7] shadow-lg z-20"
                >
                  {cartCount}
                </motion.span>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
