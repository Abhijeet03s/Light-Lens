import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { googleSignIn } = useContext(AuthContext);
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
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGuestLogin = async () => {
    const guestCredentials = {
      email: "testinguser@gmail.com",
      pass: "eD8+nU9@xK",
    };

    setUserData(guestCredentials);
    setErrorMessage("");
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, guestCredentials.email, guestCredentials.pass);
      navigate("/");
    } catch (error) {
      console.error("Guest login error:", error);
      setErrorMessage("Failed to login as guest. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 font-Inter px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white rounded-lg shadow-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Welcome to Light-Lens
        </h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full px-4 py-2 flex items-center justify-center space-x-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 text-sm sm:text-base"
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
              value={userData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-sm sm:text-base"
              placeholder="Email Address"
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
              value={userData.pass}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-sm sm:text-base"
              placeholder="Password"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-primary/90 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
          <button
            onClick={handleGuestLogin}
            className="w-full flex justify-center py-2 px-4 text-sm sm:text-base font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Login as Guest
          </button>
          <p className="text-xs sm:text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-medium text-primary/90 hover:text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}