import React, { useState } from "react";
import { createContext } from "react";
import data from "../data.json";

const DataContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <DataContext.Provider value={{ cart, setCart, products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, ContextProvider };
