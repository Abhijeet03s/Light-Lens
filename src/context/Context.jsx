import React, { useState } from "react";
import { createContext } from "react";
import data from "../data";

const DataContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
    
  const handleAddToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist)
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...product, qty: product.qty + 1 } : item
        )
      );
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const prodExist = cartItems.find((item) => item.id === product.id);
    if (prodExist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...prodExist, qty: prodExist.qty - 1 }
            : item
        )
      );
    }
  };

  const handleRemove = (id) => {
    const productsArr = cartItems.filter((item) => item.id !== id);
    setCartItems(productsArr);
  };
  

  return (
    <DataContext.Provider
      value={{
        cartItems,
        setCartItems,
        products,
        setProducts,
        handleAddToCart,
        handleRemoveFromCart,
        handleRemove,        
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, ContextProvider };
