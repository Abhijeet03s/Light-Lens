import React from "react";
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/Context";
import logoNavbar from "../../assets/images/website-logo-color.svg";
import cart from "../../assets/images/cart-nav.svg";

export default function Navbar({ toggle }) {
  const { loggedInUser, handleLogOut } = useContext(AuthContext);
  const { cartItems } = useContext(DataContext);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/products", text: "Products" },
    { to: "/aboutus", text: "About Us" },
  ];

  return (
    <nav className="container mx-auto max-w-full h-20 bg-white shadow-md flex justify-between items-center px-6 lg:px-14 font-Inter font-medium sticky top-0 transition-all duration-300 ease-in-out z-50">
      <Link to="/" className="flex items-center space-x-2">
        <img
          className="h-10 md:h-14 w-auto"
          src={logoNavbar}
          alt="lightlens-logo"
          loading="lazy"
        />
        <span className="text-xl sm:text-2xl font-semibold text-primary font-Libre">
          LightLens
        </span>
      </Link>
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'text-gray-600 hover:text-primary transition-colors'
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center space-x-8">
        {loggedInUser !== null && (
          <Link to="/cart" className="relative p-2">
            <img src={cart} alt="cart-icon" className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        )}
        {loggedInUser ? (
          <button
            onClick={handleLogOut}
            className="bg-primary/90 hover:bg-primary hidden lg:block text-white rounded-md py-2 px-4 transition-colors duration-300"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-primary/90 hover:bg-primary hidden lg:block text-white rounded-md py-2 px-4 transition-colors duration-300">
              Login
            </button>
          </Link>
        )}
        <button
          onClick={toggle}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};
