import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import { MdStar } from "react-icons/md";
import CartIcon from "../../assets/images/cart.svg";

export default function Cards() {
  const navigate = useNavigate();
  const { products, setProducts, handleAddToCart } = useContext(DataContext);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-Poppins font-bold mb-6 text-gray-800">
        Explore Our Frames
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <Link to={`/products/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
            </Link>
            <div className="p-4 space-y-3">
              <h2 className="text-lg font-Poppins font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <div className="flex items-center">
                <span className="text-sm font-medium font-Inter text-gray-700">
                  {product.rating}
                </span>
                <MdStar className="text-yellow-400 ml-1" size={16} />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-Poppins font-bold text-gray-900">
                  ₹{product.price}
                </h3>
                <button
                  onClick={() => loggedInUser ? handleAddToCart(product) : navigate("/login")}
                  className="flex items-center bg-[#4a99d3] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#3a7ca8]"
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
