import React, { useState, useCallback } from "react";
import { createContext } from "react";
import data from "../data";
import PropTypes from 'prop-types';

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
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
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

  const filterPriceRange = ([min, max]) => {
    const filteredProducts = filterProducts.filter(
      (product) => product.price >= min && product.price <= max
    );
    setProducts(filteredProducts);
  };

  const filterByRating = (rating) => {
    const filteredProducts = filterProducts.filter(
      (product) => product.rating >= rating
    );
    setProducts(filteredProducts);
  };

  const searchProducts = (term) => {
    const filteredProducts = filterProducts.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const sortByPrice = (order) => {
    let sortedProducts = [...products];
    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleClearFilters = useCallback((resetFilterState) => {
    setProducts(data);
    setFilterProducts(data);
    if (resetFilterState) {
      resetFilterState();
    }
  }, []);

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
        filterByRating,
        searchProducts,
        sortByPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, ContextProvider };
