import { createContext, useState } from "react";
import data from "../data.json";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const filter = (e) => {
    const selectedVal = e.target.value;
    const filteredProducts = products.filter((item) => {
      // console.log(item.category === selectedVal);
      return item.category === selectedVal;
    });
    // console.log(filteredProducts);
    setProducts(filteredProducts);
  };

  return (
    <CategoryContext.Provider value={{ filter, products }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryContextProvider };
