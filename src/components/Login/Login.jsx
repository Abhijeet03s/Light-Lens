import React, { useState, useEffect, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { googleSignIn, loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    pass: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.pass) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    if (!isValidEmail(userData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.pass);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGuestLogin = () => {
    setUserData({ email: "test@gmail.com", pass: "test123" });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 font-Inter px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white rounded-lg shadow-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Welcome to Light-Lens
        </h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full px-4 py-2 flex items-center justify-center space-x-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 text-sm sm:text-base"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-2 text-gray-500 bg-white">Or continue with</span>
          </div>
        </div>
        <form onSubmit={handleSubmitForm} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              value={userData.email}
              onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              value={userData.pass}
              onChange={(e) => setUserData((prev) => ({ ...prev, pass: e.target.value }))}
            />
          </div>
          <div className="flex items-center justify-end">
            <Link to="/forgot-password" className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </Link>
          </div>
          {errorMessage && (
            <p className="text-xs sm:text-sm text-red-600">{errorMessage}</p>
          )}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        <button
          onClick={handleGuestLogin}
          className="w-full px-4 py-2 text-xs sm:text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Try as Guest
        </button>
        <p className="text-xs sm:text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
