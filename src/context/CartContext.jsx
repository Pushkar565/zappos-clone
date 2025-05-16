import { createContext, useContext, useState } from "react";

// 1. Create context
const CartContext = createContext();

// 2. Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Remove product by ID
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Export the custom hook here 👇
export const useCart = () => {
  return useContext(CartContext);
};
