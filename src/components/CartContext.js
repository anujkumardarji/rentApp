//compnent/CartContext.js

import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (item) => {
    
    const response = await axios.post('https://bacrentapp.onrender.com/cart/add', item);
    setCartItems(response.data);
  };

  const removeFromCart = async (id , uid) => {
    const response = await axios.post('https://bacrentapp.onrender.com/cart/remove', { id, userId: uid });
    setCartItems(response.data);
};


  const getCartItems = async (uid) => {
    const response = await axios.get(`https://bacrentapp.onrender.com/cart`, { params: { uid: uid } });
    setCartItems(response.data);
  };
  
  

  return (
    <CartContext.Provider value={{ cartItems, getCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};