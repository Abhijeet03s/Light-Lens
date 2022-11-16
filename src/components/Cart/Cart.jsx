import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { AiOutlineShopping } from "react-icons/ai";

export default function Cart() {
  const { cartItems, handleAddToCart, handleRemoveFromCart, handleRemove } =
    useContext(DataContext);

  return (
    <>
      <div className="max-w-full min-h-screen bg-[#f4f4f4] font-Inter font-medium">
        {cartItems.length < 1 && (
          <div>
            <AiOutlineShopping size={150} />
            <h1>Your Shopping Bag is empty</h1>
          </div>
        )}
        <div className="card-body container max-w-full md:min-h-screen">
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="max-w-full text-black flex justify-evenly items-center px-36 py-10 m-0"
              >
                <img className="w-32" src={item.image} alt="product-image" />
                <h1 className="md:w-36 md:text-center text-black">
                  {item.title}
                </h1>
                <div className="md:w-20 md:flex md:justify-evenly md:items-center btn-group">
                  <button
                    onClick={() => {
                      handleRemoveFromCart(item);
                    }}
                    className="btn border-0 bg-[#E21717]"
                  >
                    -
                  </button>
                  <span className="p-3">{item.qty}</span>
                  <button
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                    className="btn border-0 bg-green-600 "
                  >
                    +
                  </button>
                </div>
                <h1 className="md:w-20 md:text-[16px] text-center">
                  ${item.price}
                </h1>
                <button
                  className="md:w-20 p-2 bg-[#E21717] text-[#f5f5f5f5] rounded-[5px]"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
