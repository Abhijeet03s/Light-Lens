import { MdStar } from "react-icons/md";

export default function Hero({ products }) {
  return (
    <>
      <div className="max-w-full py-10 flex flex-col bg-[#f4f4f4] text-black space-y-10 font-Inter relative">
        {/* Blueglasses */}

        <div className="flex flex-col items-start">
          <h1 className="ml-[100px] mb-10 bg-[#4a99d3] p-2 rounded-lg font-bold text-xl text-white">
            Blueglasses
          </h1>
          <div className="flex flex-wrap justify-evenly items-center gap-y-16">
            {products.blueglasses.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer bg-color-2"
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
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eyeglasses */}

        <div className="flex flex-col items-start">
          <h1 className="ml-[100px]  mb-10 bg-[#4a99d3] p-2 rounded-lg font-bold text-xl text-white">
            Eyeglasses
          </h1>
          <div className="flex flex-wrap justify-evenly items-center gap-y-16">
            {products.eyeglasses.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer bg-color-2"
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
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sunglasses */}

        <div className="flex flex-col items-start">
          <h1 className="ml-[100px]  mb-10 bg-[#4a99d3] p-2 rounded-lg font-bold text-xl text-white">
            Sunglasses
          </h1>
          <div className="flex flex-wrap justify-evenly items-center gap-y-16">
            {products.sunglasses.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5 cursor-pointer bg-color-2"
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
                        <button>Add To Cart</button>
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
