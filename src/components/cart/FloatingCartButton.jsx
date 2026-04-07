import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FloatingCartButton Component
 * Renders a floating button with cart item count for mobile view.
 * Fixed to the bottom-left corner.
 */
const FloatingCartButton = ({ onClick, cartCount }) => {
  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <motion.button
          key="floating-cart-btn-v2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className="fixed bottom-6 left-6 z-[60] bg-secondary text-white p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-primary flex items-center justify-center transition-colors group"
          aria-label={`Open cart with ${cartCount} items`}
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            
            <motion.span
              key={cartCount}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-3 -right-3 bg-primary text-white text-[11px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-secondary shadow-lg"
            >
              {cartCount}
            </motion.span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;
