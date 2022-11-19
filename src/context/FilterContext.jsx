import { createContext, useState } from "react";
import data from "../data";

const FilterContext = createContext();

function FilterContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  const [filterProduct, setFilterProducts] = useState(data);

  
  const filter = (e) => {
    const selectedVal = e.target.value;
    // console.log(descr);
    if (selectedVal === "All") {
      setProducts(filterProduct);
      //   console.log(setProducts(filterProduct));
    } else {
      const filteredProducts = filterProduct.filter((item) => {
        return item.category === selectedVal;
      });
      setProducts(filteredProducts);
      console.log(setProducts(filteredProducts));
    }
  };

  return (
    <FilterContext.Provider
      value={{ filter, filterProduct, setFilterProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterContextProvider };
