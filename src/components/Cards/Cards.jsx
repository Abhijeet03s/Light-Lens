import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import { MdStar } from "react-icons/md";
import CartIcon from "../../assets/assets/cart.svg";

export default function Cards() {
  const navigate = useNavigate();
  const { products, setProducts, handleAddToCart } = useContext(DataContext);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <>
      <div className="flex-1 py-4">
        <h1 className="text-center text-5xl font-Poppins mb-10">Frames</h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-evenly items-center gap-10">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-80 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer"
                >
                  <div>
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt="specs-image" />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center items-start space-y-3">
                    <h1 className="text-lg font-Poppins font-semibold">
                      {product.title}
                    </h1>
                    <div className="flex items-center gap-x-1">
                      <span className="text-md font-medium font-Inter">
                        {product.rating}
                      </span>
                      <MdStar color="#4a99d3" />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <h2 className="text-lg font-Poppins font-extrabold">
                        ₹ {product.price}
                      </h2>
                      <div className="flex justify-between items-center bg-[#4a99d3] text-white p-2 space-x-2 rounded-md font-Poppins font-normal">
                        <img src={CartIcon} alt="cart-icon" />
                        {loggedInUser ? (
                          <button onClick={() => handleAddToCart(product)}>
                            Add To Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Add To Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
