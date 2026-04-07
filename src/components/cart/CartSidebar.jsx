import React, { memo } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from "../../context/CartContext";

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const CartItem = memo(({ item, updateQuantity, removeFromCart }) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="flex gap-4 items-center bg-white p-4 rounded-[1.8rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="relative w-24 h-24 flex-shrink-0">
      <img src={item.image} alt={item.name} className="w-full h-full rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute -top-2 -right-2">
        <Badge variant="premium" className="h-6 w-6 flex items-center justify-center rounded-full p-0">
          {item.quantity}
        </Badge>
      </div>
    </div>
    
    <div className="flex-1 space-y-2 min-w-0">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-secondary truncate pr-2">{item.name}</h4>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-300 hover:text-red-500 transition-colors"
          aria-label={`Remove ${item.name}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <p className="text-primary font-black">₹{item.price * item.quantity}</p>
      
      <div className="flex items-center gap-3 bg-gray-50/50 w-fit p-1 rounded-xl border border-gray-100/50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => updateQuantity(item.id, -1)}
          className="w-8 h-8 rounded-lg hover:bg-white hover:shadow-sm"
          aria-label="Decrease quantity"
        >
          <Minus className="w-3.5 h-3.5" />
        </Button>
        <span className="font-black w-4 text-center text-xs tabular-nums text-secondary">{item.quantity}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => updateQuantity(item.id, 1)}
          className="w-8 h-8 rounded-lg hover:bg-white hover:shadow-sm"
          aria-label="Increase quantity"
        >
          <Plus className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  </motion.div>
));

CartItem.displayName = 'CartItem';

const CartSidebar = memo(({ isOpen, onClose, onCheckout }) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/30 backdrop-blur-md z-[60]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#FDFBF7] z-[70] shadow-[0_0_100px_rgba(0,0,0,0.1)] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 pb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-secondary text-white rounded-[1.2rem] shadow-xl shadow-secondary/10">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-secondary">Your Order</h2>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{cartCount} Delicacies selected</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full h-12 w-12 hover:bg-white"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-2 space-y-6 no-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-32 h-32 bg-gray-50 rounded-[2.5rem] flex items-center justify-center border border-gray-100">
                    <ShoppingBag className="w-12 h-12 text-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-secondary">Awaiting Your Choice</h3>
                    <p className="text-gray-400 text-sm max-w-[200px] font-medium leading-relaxed">Your culinary selection will appear here as you browse the menu.</p>
                  </div>
                  <Button onClick={onClose} variant="outline" className="rounded-2xl">Start Browsing</Button>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      updateQuantity={updateQuantity} 
                      removeFromCart={removeFromCart} 
                    />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 bg-white border-t border-gray-100 space-y-6 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-secondary">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span>Service Fee</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-serif text-3xl font-bold text-secondary italic">Total</span>
                    <span className="font-black text-4xl text-primary tabular-nums tracking-tighter">₹{cartTotal}</span>
                  </div>
                </div>
                
                <Button
                  onClick={onCheckout}
                  size="lg"
                  className="w-full rounded-3xl py-6 text-xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 group"
                >
                  Confirm Selection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-center text-[10px] text-gray-300 uppercase tracking-[0.3em] font-black">
                  Exclusive In-Room Dining Experience
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

CartSidebar.displayName = 'CartSidebar';

export default CartSidebar;
