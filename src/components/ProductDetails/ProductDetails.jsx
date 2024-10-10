import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MdStar, MdShoppingCart } from "react-icons/md";
import { DataContext } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { ID } = useParams();
  const { loggedInUser } = useContext(AuthContext);
  const { products, handleAddToCart } = useContext(DataContext);

  const selectedProduct = products.find((product) => product.id === Number(ID));

  if (!selectedProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Product not found.</p>
      </div>
    );
  }

  return (
    <section className="text-gray-600 font-Inter overflow-hidden">
      <div className="container min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-2">
              {selectedProduct.title}
            </h1>
            <h3 className="text-gray-600 text-lg">Category: {selectedProduct.category}</h3>
            <div className="flex items-center mb-4">
              <MdStar className="text-yellow-400" />
              <span className="text-gray-600 ml-2">{selectedProduct.rating}</span>
            </div>
            <p className="leading-relaxed text-base sm:text-lg">
              {selectedProduct.description || "No description available."}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4">
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-0">
                ₹ {selectedProduct.price}
              </p>
              <div className="w-full sm:w-auto">
                {loggedInUser ? (
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="w-full sm:w-auto flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                  >
                    <MdShoppingCart size={24} className="mr-2" />
                    Add To Cart
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full sm:w-auto flex justify-center items-center bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                  >
                    <MdShoppingCart size={24} className="mr-2" />
                    Login to Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
