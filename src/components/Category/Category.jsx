import { motion } from "framer-motion";
import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const { products } = useContext(DataContext);

  const categoryHandler = () => {
    navigate("/products");
  };
    
  return (
    <>
      <motion.section className="max-w-full flex flex-col justify-center py-10 font-Inter">
        <div className="max-w-[80%] w-full mx-auto flex flex-col text-center">
          <h1 className="text-4xl mb-4 font-Poppins font-semibold">
            Categories
          </h1>
          <p className="text-xl mb-3">
            Browse through the various categories available to us.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mx-auto w-[80%] lg:w-[90%] p-10 gap-10 rounded-lg shadow-xl">
          {products.slice(0, 3).map((categoryItem) => {
            return (
              <div
                key={categoryItem.id}
                onClick={() => categoryHandler(categoryItem)}
                className="flex flex-col justify-center items-center rounded-b-xl shadow-md gap-y-2 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-44 rounded-t-lg">
                  <img src={categoryItem.image} />
                </div>
                <div className="p-4 bg-[#bfe0fb] w-full text-center rounded-b-xl">
                  <h6 className="font-normal text-gray-600">
                    {categoryItem.category.toUpperCase()}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
}
