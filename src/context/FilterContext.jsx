import { createContext, useState } from "react";
import data from "../data.json";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const category = (e) => {
    const selectedVal = e.target.value;   
    const filteredProducts = products.filter((item) => {
      return item.category === selectedVal;
    });
    // console.log(filteredProducts);
  };

  return (
    <FilterContext.Provider value={{ category, products }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
