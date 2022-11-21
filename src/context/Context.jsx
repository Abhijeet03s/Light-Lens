import React, { useState } from "react";
import { createContext } from "react";
import data from "../data";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [filterProduct, setFilterProduct] = useState(data);

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

  const handleRemoveProduct = (id) => {
    const productsArr = cartItems.filter((item) => item.id !== id);
    setCartItems(productsArr);
  };

  const category = (e) => {
    const selectedCat = e.target.value;
    if (selectedCat === "All") {
      setProducts(filterProduct);
    } else {
      const filteredProducts = filterProduct.filter((item) => {
        return item.category === selectedCat;
      });
      setProducts(filteredProducts);
    }
  };

  const handleClearFilters = () => {
    setProducts(filterProduct);
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
        handleRemoveProduct,
        category,
        filterProduct,
        handleClearFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
