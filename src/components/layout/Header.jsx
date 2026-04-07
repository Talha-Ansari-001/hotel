import React, { memo } from 'react';
import { ConciergeBell, UtensilsCrossed, User } from 'lucide-react';
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
              HOTEL <span className="text-primary font-light italic">NINE</span>
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
              className="relative rounded-[1.2rem] h-14 w-14 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-primary/10 group-hover:border-primary/50 transition-all duration-500 overflow-visible bg-white"
              aria-label={`Open cart, ${cartCount} items`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[1.2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ConciergeBell className="w-6 h-6 relative z-10 transition-colors text-secondary group-hover:text-primary" />
              
              {cartCount > 0 && (
                <motion.span 
                  key={cartCount}
                  initial={{ scale: 0, y: 5 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-2 -right-2 bg-secondary text-primary text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-20"
                >
                  {cartCount}
                </motion.span>
              )}
            </Button>
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
          </motion.div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
