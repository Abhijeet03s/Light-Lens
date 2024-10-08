import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";

export default function Signup() {
  const { googleSignIn, loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.pass) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    if (!isValidEmail(userData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (userData.pass.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.pass);
      await updateProfile(userCredential.user, {
        displayName: userData.name,
      });
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 font-Inter px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white rounded-lg shadow-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full px-4 py-2 flex items-center justify-center space-x-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 text-sm sm:text-base"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-2 text-gray-500 bg-white">Or sign up with email</span>
          </div>
        </div>
        <form onSubmit={handleSubmitForm} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              type="password"
              name="pass"
              value={userData.pass}
              onChange={handleInputChange}
              required
              minLength={6}
            />
          </div>
          {errorMessage && <p className="text-xs sm:text-sm text-red-600" role="alert">{errorMessage}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <p className="text-xs sm:text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}