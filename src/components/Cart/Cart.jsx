import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { MdCancel, MdOutlineShoppingBag } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function Cart() {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveProduct,
    setCartItems,
    savedForLater,
    setSavedForLater,
  } = useContext(DataContext);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedItems = localStorage.getItem('savedForLater');
    if (savedItems) {
      setSavedForLater(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedForLater', JSON.stringify(savedForLater));
  }, [savedForLater]);

  const calculateTotals = (items) => {
    const subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
    const taxRate = 0.18;
    const taxPrice = subtotal * taxRate;
    const deliveryCharge = subtotal > 1000 ? 0 : 100;
    const totalAmount = subtotal + taxPrice + deliveryCharge;

    return { subtotal, taxPrice, deliveryCharge, totalAmount };
  };

  const { subtotal, taxPrice, deliveryCharge, totalAmount } = calculateTotals(cartItems);

  const handleCheckout = () => {
    setShowConfetti(true);
    setShowModal(true);

    const resetCart = () => {
      setShowConfetti(false);
      setShowModal(false);
      setCartItems([]);
      localStorage.setItem('cartItems', JSON.stringify([]));
      window.location.href = '/';
    };
    setTimeout(resetCart, 3000);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    navigate('/');
  };

  const handleSaveForLater = (item) => {
    setSavedForLater([...savedForLater, item]);
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleMoveToCart = (item) => {
    handleAddToCart(item);
    setSavedForLater(savedForLater.filter((savedItem) => savedItem.id !== item.id));
  };

  return (
    <div className="container mx-auto min-h-screen font-Poppins font-medium px-4 py-8 lg:px-8">
      {showConfetti && <Confetti />}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-16 rounded-lg shadow-xl text-center max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
            <p className="text-lg">Thank you for your purchase.</p>
          </div>
        </div>
      )}
      {cartItems.length < 1 ? (
        <div className="flex flex-col justify-center items-center mt-20">
          <MdOutlineShoppingBag size={150} className="text-gray-400" />
          <h1 className="text-2xl lg:text-3xl font-Poppins font-medium mt-10 text-gray-800">
            Your Shopping Bag is Empty
          </h1>
          <Link to="/products">
            <button className="mt-10 bg-primary/90 hover:bg-primary transition-colors duration-300 text-white text-lg rounded-full py-3 px-6 shadow-md">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div className="w-full lg:w-2/3 bg-white p-4 lg:p-6 lg:border-r border-gray-200 overflow-y-auto scrollbar-hide max-h-[calc(100vh-4rem)]">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <h2 className="text-xl lg:text-2xl font-Poppins font-semibold">Your Cart</h2>
              <button
                onClick={handleRemoveAll}
                className="flex items-center text-red-500 hover:text-red-700 transition-colors duration-300"
              >
                <span className="text-xs lg:text-sm font-medium">Remove All</span>
              </button>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 lg:py-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-24 h-24 lg:w-32 lg:h-24 rounded-lg flex items-center justify-center">
                    <img
                      className="w-20 h-auto object-contain lg:w-24"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-medium text-gray-800">{item.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">₹{item.price.toFixed(2)}</p>
                    <button
                      onClick={() => handleSaveForLater(item)}
                      className="text-blue-500 hover:text-blue-700 text-sm"
                    >
                      Save for Later
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      className="px-2 py-1 lg:px-3 lg:py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      -
                    </button>
                    <span className="px-2 py-1 lg:px-3 lg:py-1 text-gray-800">{item.qty}</span>
                    <button
                      className={`px-2 py-1 lg:px-3 lg:py-1 text-gray-600 hover:bg-gray-100 ${item.qty >= 5 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      onClick={() => handleAddToCart(item)}
                      disabled={item.qty >= 5}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdCancel size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 p-4 lg:p-6">
            <div className="lg:sticky lg:top-6">
              <h2 className="text-xl lg:text-2xl font-Poppins font-semibold mb-4 lg:mb-6">Order Summary</h2>
              <div className="space-y-4 bg-white p-4 lg:p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18%)</span>
                  <span className="font-semibold">₹{taxPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charge</span>
                  <span className="font-semibold">₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-blue-600 text-bold">₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-6 lg:mt-8 bg-primary/90 hover:bg-primary text-white rounded-full py-3 lg:py-4 px-6 transition-all duration-300 shadow-lg font-bold text-sm lg:text-base uppercase tracking-wide focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      {savedForLater.length > 0 && (
        <hr className="my-8 border-t border-gray-200" />
      )}
      {savedForLater.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl lg:text-2xl font-Poppins font-semibold mb-4">Saved for Later</h2>
          <div className="w-full lg:w-2/3 bg-white p-4 lg:p-6 overflow-y-auto scrollbar-hide max-h-[calc(100vh-4rem)]">
            {savedForLater.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 lg:py-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-24 h-24 lg:w-32 lg:h-24 rounded-lg flex items-center justify-center">
                    <img
                      className="w-20 h-auto object-contain lg:w-24"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-medium text-gray-800">{item.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">₹{item.price.toFixed(2)}</p>
                    <button
                      onClick={() => setSavedForLater(savedForLater.filter(savedItem => savedItem.id !== item.id))}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="bg-primary/90 text-white px-4 py-2 rounded hover:bg-primary text-sm self-start sm:self-top mt-2 sm:mt-0"
                >
                  Move to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}