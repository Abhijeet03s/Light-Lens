import { MdStar } from "react-icons/md";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import cart from "../../assets/assets/cart.svg";

export default function Products() {
  const { products, handleAddToCart } = useContext(DataContext);

  return (
    <>
      <div className="container max-w-full py-10 flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="basis-72 p-4">
            <Filter />
          </div>
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
                      <div className="flex flex-col justify-center items-start">
                        <h1 className="text-lg font-Poppins font-semibold">{product.title}</h1>
                        <div className="flex items-center gap-x-1 mt-5">
                          <span className="text-md font-medium font-Inter">
                            {product.rating}
                          </span>
                          <MdStar color="#4a99d3" />
                        </div>
                        <div className="w-full flex justify-between items-center">
                          <h2 className="text-lg mt-1 font-Poppins font-extrabold">
                            ₹ {product.price}
                          </h2>
                          <div className="flex justify-between items-center bg-[#ed9526] text-white p-2 space-x-2 rounded-md font-Poppins font-normal">
                            <img src={cart} alt="cart-icon" />
                            <button onClick={() => handleAddToCart(product)}>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
