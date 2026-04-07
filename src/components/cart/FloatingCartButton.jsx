import React from 'react';
import { ConciergeBell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FloatingCartButton Component
 * Renders a premium floating button with cart item count for mobile view.
 */
const FloatingCartButton = ({ onClick, cartCount }) => {
  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <motion.button
          key="floating-cart-btn-premium"
          initial={{ scale: 0, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0, y: 50, opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 z-[60] bg-secondary text-white p-5 rounded-[1.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-2 border-primary/30 flex items-center justify-center transition-all group overflow-hidden"
          aria-label={`Open cart with ${cartCount} items`}
        >
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-secondary to-primary/20 opacity-100" />
          
          <div className="relative z-10">
            <ConciergeBell className="w-7 h-7 text-primary" />
            
            <motion.span
              key={cartCount}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute -top-4 -right-4 bg-primary text-secondary text-[11px] font-black w-7 h-7 flex items-center justify-center rounded-full border-2 border-secondary shadow-lg shadow-black/20"
            >
              {cartCount}
            </motion.span>
          </div>

          {/* Shine animation */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;
