import { Link } from "react-router-dom";

export default function Navbar({ toggle, toggleCart }) {
  return (
    <>
      <nav className="container mx-auto max-w-full h-[80px] bg-[#f4f4f4] flex justify-between items-center px-6 lg:px-14 font-Inter font-medium sticky top-0 z-10">
        <div>
          <Link to="/">
            <img
              className="object-cover"
              src="/assets/LIGHTLENS.svg"
              alt="brand-logo"
            />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-x-10">
          <ul className="lg:flex lg:items-center lg:gap-x-10">
            <Link to="/">
              <li className="hover:text-[#4A99D3]">Home</li>
            </Link>
            <Link to="/services">
              <li className="hover:text-[#4A99D3]">Services</li>
            </Link>
            <Link to="/products">
              <li className="hover:text-[#4A99D3]">Products</li>
            </Link>
          </ul>
          <Link to="/cart">
            <button onClick={toggleCart}>
              <img src="/assets/cart.svg" alt="cart-img" />
            </button>
          </Link>
          <Link to="/login">
            <button>
              <img src="/assets/login.svg" alt="login-img" />
            </button>
          </Link>
        </div>
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
      </nav>
    </>
  );
}
