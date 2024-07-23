import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { MdCancel, MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveProduct,
  } = useContext(DataContext);

  const subtotal = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const taxPrice = subtotal * 0.18;
  const deliveryCharge = subtotal > 10000 ? 0 : 50;
  const totalAmount = subtotal + taxPrice + deliveryCharge;

  return (
    <>
      <div className="max-w-full min-h-screen bg-[#f4f4f4] font-Inter font-medium px-3 lg:px-10">
        {cartItems.length < 1 && (
          <div className="flex flex-col justify-center items-center mt-20">
            <MdOutlineShoppingBag size={150} />
            <h1 className="text-2xl lg:text-3xl font-Poppins font-medium mt-10">
              Your Shopping Bag is empty
            </h1>
            <Link to="/products">
              <button className="mt-10 bg-[#4A99D3] block text-white text-lg rounded py-2 px-3">
                Shop Now
              </button>
            </Link>
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-10 lg:min-h-screen py-10">
          <div className="lg:w-[80%]">
            {cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="max-w-full text-black flex lg:flex-wrap justify-evenly items-center py-10"
                >
                  <div className="w-[40%] flex flex-col lg:flex-row items-center gap-y-5 lg:gap-x-10">
                    <img
                      className="w-32 bg-neutral-200 p-1 rounded"
                      src={item.image}
                      alt="product-image"
                    />
                    <h1 className="lg:w-36 lg:ml-14 text-center text-black">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex">
                    <button
                      className="bg-neutral-200 px-3 py-2 text-sm rounded-l-md hover:bg-neutral-300 hover:text-dark-orange"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      -
                    </button>
                    <p className="px-3 my-auto bg-neutral-200 py-2 text-sm">
                      {item.qty}
                    </p>
                    <button
                      className="bg-neutral-200 px-3 py-2 text-sm rounded-r-md hover:bg-neutral-300 hover:text-dark-orange"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <h1 className="lg:w-20 lg:text-[16px] text-center">
                    ${item.price}
                  </h1>
                  <MdCancel
                    size={20}
                    onClick={() => handleRemoveProduct(item.id)}
                  />
                </div>
              );
            })}
          </div>

          {cartItems.length >= 1 && (
            <div className="bg-[#eae8e8] lg:w-[30%] h-[50%] px-8 lg:px-16 py-10 flex flex-col justify-start items-start space-y-10">
              <h1 className="text-2xl font-Poppins font-semibold">Summary</h1>
              <div className="w-full flex flex-col justify-between space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <span>{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <p>Tax Price:</p>
                  <span>{taxPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-gray-500 pb-3">
                  <p>Delivery Charge:</p>
                  <span>{deliveryCharge}</span>
                </div>
                <div className="flex justify-between">
                  <p>Total Amount:</p>
                  <span>{totalAmount.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full p-2 rounded-md text-white bg-[#4A99D3]">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
