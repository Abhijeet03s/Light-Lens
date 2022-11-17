import { MdStar } from "react-icons/md";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, handleAddToCart } = useContext(DataContext);

  return (
    <>
      <div className="max-w-full py-10 flex flex-col bg-[#f4f4f4] text-black space-y-10 font-Inter relative">
        <h1 className="text-center text-5xl">Spectacle Frames</h1>

        {/* Blueglasses */}

        <h1 className="text-3xl text-center font-Mukta font-normal lg:text-left lg:ml-10">
          BLUEGLASSES
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-evenly items-center gap-y-16">
            {products.blueglasses.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer card-animate"
                >
                  <div className="bg-[#ecebec] rounded-lg">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt="specs-image" />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-x-1 mt-2">
                      <span className="text-md font-medium">
                        {product.rating}
                      </span>
                      <MdStar color="#4a99d3" />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <h2 className="text-lg mt-1 font-extrabold">
                        ₹ {product.price}
                      </h2>
                      <div className="flex justify-between items-center bg-[#4a99d3] text-white p-2 space-x-2 rounded-md">
                        <img src="/cart.svg" alt="cart-icon" />
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

        {/* Eyeglasses */}

        <h1 className="text-3xl text-center font-Mukta font-normal lg:text-left lg:ml-10">
          EYEGLASSES
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-evenly items-center gap-y-16">
            {products.eyeglasses.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer card-animate"
                >
                  <div>
                    <img src={product.image} alt="specs-image" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-x-1 mt-2">
                      <span className="text-md font-medium">
                        {product.rating}
                      </span>
                      <MdStar color="#4a99d3" />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <h2 className="text-lg mt-1 font-extrabold">
                        ₹ {product.price}
                      </h2>
                      <div className="flex justify-between items-center bg-[#4a99d3] text-white p-2 space-x-2 rounded-md">
                        <img src="/cart.svg" alt="cart-icon" />
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

        {/* Sunglasses */}

        <h1 className="text-3xl text-center font-Mukta font-normal lg:text-left lg:ml-10">
          SUNGLASSES
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-evenly items-center gap-y-16">
            {products.sunglasses.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer card-animate"
                >
                  <div>
                    <img src={product.image} alt="specs-image" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-x-1 mt-2">
                      <span className="text-md font-medium">
                        {product.rating}
                      </span>
                      <MdStar color="#4a99d3" />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <h2 className="text-lg mt-1 font-extrabold">
                        ₹ {product.price}
                      </h2>
                      <div className="flex justify-between items-center bg-[#4a99d3] text-white p-2 space-x-2 rounded-md">
                        <img src="/cart.svg" alt="cart-icon" />
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
    </>
  );
}
