import React, { useState, memo, useCallback } from 'react';
import { X, Send, User, MapPin, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { useCart } from "../../context/CartContext";

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const CheckoutModal = memo(({ isOpen, onClose }) => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Form, 2: Summary
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    room: '',
    orderType: 'Room Delivery',
    instructions: ''
  });

  const isFormValid = formData.name.trim() !== '' && formData.room.trim() !== '';

  const handleNext = (e) => {
    e.preventDefault();
    if (isFormValid) setStep(2);
  };

  const handlePlaceOrder = useCallback(() => {
    const itemsText = cartItems
      .map((item) => `• ${item.quantity} x ${item.name} (₹${item.price})`)
      .join('\n');

    const message = `*NEW ORDER RECEIVED*

*CUSTOMER:* ${formData.name.toUpperCase()}
*PHONE:* ${formData.phone || 'N/A'}
*ROOM/TABLE:* ${formData.room}
*TYPE:* ${formData.orderType}

*ITEMS:*
${itemsText}

*TOTAL PAYABLE: ₹${cartTotal}*

*SPECIAL NOTE:* ${formData.instructions || 'None'}

_Sent via Rizwan Hotel Premium Dining_`;

    const whatsappUrl = `https://wa.me/919881375611?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setStep(1);
    onClose();
  }, [cartItems, cartTotal, formData, clearCart, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/60 backdrop-blur-xl z-[80]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 m-auto w-[95%] max-w-xl h-fit max-h-[90vh] bg-white z-[90] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-secondary p-10 text-white relative">
              <div className="space-y-2">
                <h2 className="font-serif text-4xl font-bold italic tracking-tight">
                  {step === 1 ? 'Order Details' : 'Final Summary'}
                </h2>
                <p className="text-primary-light/60 text-[10px] uppercase tracking-[0.3em] font-black">
                  {step === 1 ? 'Guest Information' : 'Review Selection'}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-8 right-8 text-white/40 hover:text-white hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="overflow-y-auto p-10 pt-8 no-scrollbar">
              {step === 1 ? (
                <form onSubmit={handleNext} className="space-y-8">
                  <div className="space-y-6">
                    <Input
                      required
                      icon={User}
                      placeholder="Guest Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        icon={Phone}
                        type="tel"
                        placeholder="Contact Number (Optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <Input
                        required
                        icon={MapPin}
                        placeholder="Room / Table No. *"
                        value={formData.room}
                        onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-3 p-2 bg-gray-50 rounded-[2rem] border border-gray-100">
                      {['Room Delivery', 'Self Pickup'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, orderType: type })}
                          className={`flex-1 py-4 px-6 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                            formData.orderType === type
                              ? 'bg-white shadow-xl shadow-secondary/5 text-primary ring-1 ring-gray-100'
                              : 'text-gray-400 hover:text-secondary'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        placeholder="Any special requests? (e.g., Allergies, Spice level...)"
                        rows="3"
                        className="w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-100 rounded-[1.5rem] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-secondary font-medium placeholder:text-gray-400"
                        value={formData.instructions}
                        onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full rounded-[1.8rem] py-6 text-lg shadow-2xl shadow-primary/20"
                  >
                    Review Order Summary
                  </Button>
                </form>
              ) : (
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
                      <div className="bg-green-100 p-3 rounded-2xl">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary">{formData.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Room {formData.room} • {formData.orderType}</p>
                      </div>
                    </div>

                    <div className="space-y-4 max-h-[200px] overflow-y-auto no-scrollbar">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                          <span className="text-gray-500 font-medium">
                            <span className="text-secondary font-black">{item.quantity}x</span> {item.name}
                          </span>
                          <span className="font-bold text-secondary">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-center">
                      <span className="font-serif text-2xl font-bold text-secondary italic">Final Amount</span>
                      <span className="font-black text-3xl text-primary">₹{cartTotal}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-[1.8rem] py-6"
                      onClick={() => setStep(1)}
                    >
                      Go Back
                    </Button>
                    <Button
                      className="flex-[2] rounded-[1.8rem] py-6 shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                      onClick={handlePlaceOrder}
                    >
                      <Send className="w-5 h-5" /> Place via WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

CheckoutModal.displayName = 'CheckoutModal';

export default CheckoutModal;
