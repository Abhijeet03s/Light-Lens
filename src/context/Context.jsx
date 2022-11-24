import React, { useState } from "react";
import { createContext } from "react";
import data from "../data";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [filterProducts, setFilterProducts] = useState(data);

  const handleAddToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist)
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item
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

  const filterCategory = (e) => {
    const selectedCat = e.target.value;
    if (selectedCat === "All") {
      setProducts(filterProducts);
    } else {
      const filteredProducts = filterProducts.filter((item) => {
        return item.category === selectedCat;
      });
      setProducts(filteredProducts);
    }
  };

  const filterPriceRange = (e) => {
    const selectedRange = e.target.value;
    const result = [...filterProducts].sort((a, b) => b.price - a.price);
    const result2 = [...filterProducts].sort((a, b) => a.price - b.price);
    switch (selectedRange) {
      case "High to Low":
        return setProducts(result);
        break;
      case "Low to High":
        return setProducts(result2);
        break;
      case "default":
        return setProducts(filterProducts);
        break;
      default:
        return;
    }
  };

  const handleClearFilters = () => {
    setProducts(filterProducts);
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
        filterCategory,
        filterProducts,
        handleClearFilters,
        filterPriceRange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
