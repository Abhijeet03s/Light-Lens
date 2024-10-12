import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import { MdStar, MdSearch, MdAdd, MdRemove, MdShoppingCart } from "react-icons/md";

const getRatingColor = (rating) => {
  if (rating >= 4.5) return 'bg-green-100 text-green-700';
  if (rating >= 4) return 'bg-lime-100 text-lime-700';
  if (rating >= 3.5) return 'bg-yellow-100 text-yellow-700';
  if (rating >= 3) return 'bg-orange-100 text-orange-700';
  return 'bg-red-100 text-red-700';
};

export default function Cards() {
  const navigate = useNavigate();
  const { products, handleAddToCart, handleRemoveFromCart, searchProducts, sortByPrice, cartItems } = useContext(DataContext);
  const { loggedInUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchProducts(term);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    if (order === "default") {
      searchProducts(searchTerm);
    } else {
      sortByPrice(order);
    }
  };

  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.qty : 0;
  };

  const handleCartAction = (product) => {
    if (!loggedInUser) {
      navigate("/login");
      return;
    }
    handleAddToCart(product);
  };

  return (
    <div className="w-full font-Poppins">
      <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-0">
          Explore Our Frames
        </h1>
        <div className="w-full lg:w-1/3 relative">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-3 py-2 text-sm lg:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Sort By Price */}
        <div className="w-full lg:w-1/5 mt-4 lg:mt-0 relative">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="w-full p-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#4A99D3] focus:border-[#4A99D3] text-sm lg:text-base appearance-none bg-white transition-all duration-300 hover:bg-gray-50"
          >
            <option value="default">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-5 w-5 text-[#4A99D3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => {
          const quantity = getItemQuantity(product.id);
          const ratingColorClass = getRatingColor(product.rating);
          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-102 flex flex-col h-full"
            >
              <Link to={`/products/${product.id}`} className="block relative pb-[75%] sm:pb-[100%]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-contain p-2 sm:p-4"
                />
              </Link>
              <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between space-y-2 sm:space-y-4">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 mb-2 sm:mb-4">
                    {product.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center px-2 py-1 rounded-full ${ratingColorClass}`}>
                      <span className="text-xs sm:text-sm font-medium mr-1">
                        {product.rating.toFixed(1)}
                      </span>
                      <MdStar className="text-current" size={14} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </h3>
                  </div>
                </div>
                <div className="pt-2">
                  {quantity === 0 ? (
                    <button
                      onClick={() => handleCartAction(product)}
                      className="w-full bg-primary text-white py-2 sm:py-3 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-primary-dark flex items-center justify-center"
                    >
                      <MdShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Add To Cart
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-gray-100 rounded-full">
                        <button
                          onClick={() => handleRemoveFromCart(product)}
                          className="p-2 sm:p-3 text-primary hover:bg-gray-200 rounded-full transition-colors duration-300"
                        >
                          <MdRemove size={18} />
                        </button>
                        <span className="text-sm font-medium">{quantity}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="p-2 sm:p-3 text-primary hover:bg-gray-200 rounded-full transition-colors duration-300"
                        >
                          <MdAdd size={18} />
                        </button>
                      </div>
                      <Link
                        to="/cart"
                        className="block w-full text-center bg-primary text-white py-2 sm:py-3 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-primary-dark"
                      >
                        Go to Cart
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}