import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/assets/LIGHTLENS-nav.svg";
import Cart from "../../assets/assets/cart-nav.svg";


export default function Navbar({ toggle, toggleCart }) {
  const { loggedInUser, accLogOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await accLogOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="container mx-auto max-w-full h-[80px] bg-[#f4f4f4] flex justify-between items-center px-6 lg:px-14 font-Inter font-medium sticky top-0 z-10">
        <div>
          <Link to="/">
            <img
              className="object-cover w-44 lg:w-full"
              src={Logo}
              alt="brand-logo"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-x-10 font-Inter font-medium">
          <ul className="hidden lg:flex lg:items-center lg:gap-x-10">
            <Link to="/">
              <li className="hover:text-[#4A99D3] transition-colors">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-[#4A99D3] transition-colors">About</li>
            </Link>
            <Link to="/services">
              <li className="hover:text-[#4A99D3] transition-colors">
                Services
              </li>
            </Link>
            <Link to="/products">
              <li className="hover:text-[#4A99D3] transition-colors">
                Products
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {loggedInUser?.displayName ? (
            <button
              onClick={handleLogOut}
              className="bg-[#4A99D3] hidden lg:block text-white rounded-sm py-1 px-3"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#4A99D3] hidden lg:block text-white rounded-sm py-1 px-3">
                Sign In
              </button>
            </Link>
          )}
          <Link to="/cart">
            <button onClick={toggleCart}>
              <img src={Cart} alt="cart-img" />
            </button>
          </Link>
          <svg
            onClick={toggle}
            className="lg:hidden w-8 h-8 hover:text-[#0C1821] transition-colors cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}
