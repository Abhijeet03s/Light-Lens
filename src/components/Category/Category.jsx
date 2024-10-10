import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DataContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const { products, isLoading, error } = useContext(DataContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categoryHandler = (category) => {
    navigate(`/products?category=${category}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 md:h-32 md:w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    </div>
  );

  if (!products || products.length === 0) return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">No categories found.</span>
      </div>
    </div>
  );

  return (
    <motion.section
      ref={ref}
      className="max-w-full flex flex-col justify-center py-8 sm:py-12 md:py-16 font-Inter bg-gray-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="w-[90%] sm:max-w-[80%] mx-auto flex flex-col text-center mb-8 sm:mb-12"
        variants={itemVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-Poppins font-bold text-gray-800">
          Explore Categories
        </h1>
        <p className="text-base sm:text-xl mb-3 text-gray-600">
          Explore our stylish eyewear options.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto w-[90%] max-w-6xl">
        {products.slice(0, 3).map((categoryItem, index) => (
          <motion.button
            key={categoryItem.id}
            onClick={() => categoryHandler(categoryItem.category)}
            className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-36 sm:h-48 w-full overflow-hidden">
              <img
                src={categoryItem.image}
                alt={categoryItem.category}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="p-4 sm:p-6 bg-white font-Poppins">
              <h6 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {categoryItem.category.toUpperCase()}
              </h6>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
