import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('rizwan_hotel_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('rizwan_hotel_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    // Check if item exists outside to trigger toast once
    const existing = cartItems.find(i => i.id === product.id);
    if (existing) {
      toast.success(`Updated ${product.name} quantity`);
    } else {
      toast.success(`${product.name} added to cart`);
    }

    setCartItems((prevItems) => {
      const isExisting = prevItems.find((item) => item.id === product.id);
      if (isExisting) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, [cartItems]);

  const removeFromCart = useCallback((productId) => {
    const itemToRemove = cartItems.find(i => i.id === productId);
    if (itemToRemove) {
      toast.error(`${itemToRemove.name} removed`);
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, [cartItems]);

  const updateQuantity = useCallback((productId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    localStorage.removeItem('rizwan_hotel_cart');
  }, []);

  const cartTotal = useMemo(() => 
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  [cartItems]);

  const cartCount = useMemo(() => 
    cartItems.reduce((count, item) => count + item.quantity, 0),
  [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  }), [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
