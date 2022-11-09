import { MdStar } from "react-icons/md";

export default function Hero({ products, setProducts }) {
  return (
    <>
      <div className="max-w-full py-10 flex flex-col bg-[#f4f4f4] text-black font-Inter relative">
        <div className="flex flex-wrap justify-center items-center space-x-5 mb-7">
          <button className="mt-2 px-4 py-2 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white rounded-lg">
            All Products
          </button>
          <button className="mt-2 px-4 py-2 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white rounded-lg">
            BlueGlasses
          </button>
          <button className="mt-2 px-4 py-2 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white rounded-lg">
            SunGlasses
          </button>
          <button className="mt-2 px-4 py-2 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white rounded-lg">
            EyeGlasses
          </button>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-y-16">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-between w-96 overflow-hidden rounded-lg shadow-lg p-5 space-y-5"
              >
                <div>
                  <img src={product.image} alt="specs-image" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-xl">{product.title}</h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <MdStar color="#4a99d3" />
                    <span className="text-md">{product.rating}</span>
                  </div>
                  <h2 className="text-lg mt-1">₹ {product.price}</h2>
                  <button className="mt-2 px-4 py-2 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white rounded-lg">
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
