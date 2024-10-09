import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import { MdStar, MdSearch } from "react-icons/md";
import CartIcon from "../../assets/images/cart.svg";

export default function Cards() {
  const navigate = useNavigate();
  const { products, setProducts, handleAddToCart, searchProducts } = useContext(DataContext);
  const { loggedInUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchProducts(term);
  };

  return (
    <div className="w-full">
      <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <h1 className="text-xl lg:text-3xl font-Poppins font-bold text-gray-800 mb-4 lg:mb-0">
          Explore Our Frames
        </h1>
        <div className="w-full lg:w-1/3 relative">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-3 py-2 text-sm lg:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <Link to={`/products/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 lg:h-40 object-cover"
              />
            </Link>
            <div className="p-3 lg:p-4 space-y-2 lg:space-y-3">
              <h2 className="text-base lg:text-lg font-Poppins font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <div className="flex items-center">
                <span className="text-xs lg:text-sm font-medium font-Inter text-gray-700">
                  {product.rating}
                </span>
                <MdStar className="text-yellow-400 ml-1" size={14} />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-base lg:text-lg font-Poppins font-bold text-gray-900">
                  ₹{product.price}
                </h3>
                <button
                  onClick={() => loggedInUser ? handleAddToCart(product) : navigate("/login")}
                  className="flex items-center bg-[#4a99d3] text-white px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-colors duration-300 hover:bg-[#3a7ca8]"
                >
                  <img src={CartIcon} alt="cart-icon" className="w-4 h-4 mr-1" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
