import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { AiOutlineShopping } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

export default function Cart() {
  const { cartItems, handleAddToCart, handleRemoveFromCart, handleRemove } =
    useContext(DataContext);

  const subtotal = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const taxPrice = subtotal * 0.18;
  const deliveryCharge = subtotal > 3000 ? 0 : 50;
  const totalAmount = subtotal + taxPrice + deliveryCharge;

  return (
    <>
      <div className="max-w-full min-h-screen bg-[#f4f4f4] font-Inter font-medium px-10">
        {cartItems.length < 1 && (
          <div className="flex flex-col justify-center items-center">
            <AiOutlineShopping size={150} />
            <h1 className="text-2xl lg:text-3xl">Your Shopping Bag is empty</h1>
          </div>
        )}
        <div className="container flex flex-col lg:flex-row gap-10 max-w-full lg:min-h-screen">
          {cartItems.map((item) => {
            return (
              <div className="w-[70%] px-16 py-10 m-0">
                <div className="flex justify-between items-center mb-10">
                  <h1 className="text-left text-4xl">Shopping Cart</h1>
                  <span>{cartItems.length} Items</span>
                </div>
                <div
                  key={item.id}
                  className="max-w-full text-black flex justify-evenly items-center"
                >
                  <img className="w-40" src={item.image} alt="product-image" />
                  <h1 className="md:w-36 md:text-center text-black">
                    {item.title}
                  </h1>
                  <div className="lg:w-20 lg:flex justify-evenly items-center border border-solid border-gray-600">
                    <button
                      onClick={() => {
                        handleRemoveFromCart(item);
                      }}
                      className="border-r border-solid border-gray-600"
                    >
                      -
                    </button>
                    <span className="">{item.qty}</span>
                    <button
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                      className="border-l border-solid border-gray-600"
                    >
                      +
                    </button>
                  </div>
                  <h1 className="md:w-20 md:text-[16px] text-center">
                    ${item.price}
                  </h1>
                  <MdCancel
                    size={20}
                    color="gray"
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              </div>
            );
          })}
          {cartItems.length >= 1 && (
            <div className="bg-[#eae8e8] w-[30%] h-[50%] px-16 py-10 flex flex-col justify-start items-start space-y-10">
              <h1 className="text-2xl">Summary</h1>
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
