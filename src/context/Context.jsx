import React, { createContext, useState, useCallback, useEffect } from "react";
import data from "../data";
import PropTypes from 'prop-types';
export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [filterProducts, setFilterProducts] = useState(data);
  const [savedForLater, setSavedForLater] = useState(() => {
    const savedItems = localStorage.getItem('savedForLater');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const handleAddToCart = useCallback((product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, qty: Math.min(item.qty + 1, 5) }
            : item
        );
      }
      return [...prevCartItems, { ...product, qty: 1 }];
    });
  }, []);

  const handleRemoveFromCart = useCallback((product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem.qty === 1) {
        return prevCartItems.filter(item => item.id !== product.id);
      }
      return prevCartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  }, []);

  const handleRemoveProduct = useCallback((id) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== id));
  }, []);

  const filterCategory = useCallback((category) => {
    let filtered = data;
    if (category !== "All") {
      filtered = filtered.filter(product => product.category === category);
    }
    setFilterProducts(filtered);
    setProducts(filtered);
  }, []);

  const searchProducts = useCallback((term) => {
    const filteredProducts = filterProducts.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [filterProducts]);


  const filterByColor = useCallback((color) => {
    if (color === "All") {
      setProducts(filterProducts);
    } else {
      const filtered = filterProducts.filter(product => product.color.includes(color));
      setProducts(filtered);
    }
  }, [filterProducts]);


  const filterByShape = useCallback((shape) => {
    if (shape === "All") {
      setProducts(filterProducts);
    } else {
      const filtered = filterProducts.filter(product => product.shape === shape);
      setProducts(filtered);
    }
  }, [filterProducts]);

  const filterPriceRange = useCallback(([min, max]) => {
    const filtered = filterProducts.filter(product => product.price >= min && product.price <= max);
    setProducts(filtered);
  }, [filterProducts]);

  const filterByRating = useCallback((rating) => {
    if (rating === 0) {
      setProducts(filterProducts);
    } else {
      const filtered = filterProducts.filter(product => product.rating >= rating);
      setProducts(filtered);
    }
  }, [filterProducts]);

  const sortByPrice = useCallback((order) => {
    let sortedProducts = [...products];
    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  }, [products]);

  const handleClearFilters = useCallback((resetFilterState) => {
    setProducts(data);
    setFilterProducts(data);
    if (resetFilterState) {
      resetFilterState();
    }
  }, [data]);

  const applyAllFilters = useCallback(({ category, color, shape, priceRange, minRating }) => {
    let filteredProducts = data;

    if (category !== "All") {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (color !== "All") {
      filteredProducts = filteredProducts.filter(product => product.color.includes(color));
    }

    if (shape !== "All") {
      filteredProducts = filteredProducts.filter(product => product.shape === shape);
    }

    filteredProducts = filteredProducts.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (minRating > 0) {
      filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }

    setProducts(filteredProducts);
    setFilterProducts(filteredProducts);
  }, []);

  return (
    <DataContext.Provider
      value={{
        cartItems,
        searchProducts,
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
        sortByPrice,
        filterByColor,
        filterByShape,
        savedForLater,
        setSavedForLater,
        applyAllFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
