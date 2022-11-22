import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import GoogleButton from "react-google-button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { googleSignIn, loggedInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    pass: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!userData.email || !userData.pass) {
      setErrorMessage("Fill all the fields");
      return;
    }
    setErrorMessage("");
    // console.log(userData);
    signInWithEmailAndPassword(auth, userData.email, userData.pass)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuestLogin = () => {
    setUserData({ ...userData, email: "test@gmail.com", pass: "test123" });
  };

  useEffect(() => {
    if (loggedInUser != null) {
      navigate("/");
    }
  }, [loggedInUser]);

  return (
    <>
      <section className="flex flex-col max-w-full lg:min-h-[90vh] mt-8 font-Inter font-medium">
        <div className="w-full lg:mx-auto p-4 relative z-100">
          <div className="shadow-2xl max-w-full lg:max-w-[30%] mx-auto rounded-md p-5 lg:p-14 z-100">
            <h2 className="text-2xl lg:text-3xl text-center font-bold mb-8 text-gray-600">
              Sign In
            </h2>
            <div className="flex justify-center items-center my-8">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold my-1">
              OR
            </p>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-8">
                <p className="text-md text-gray-500 mb-2">Email</p>
                <input
                  className="border w-full rounded-md border-gray-300 p-2"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className="mb-8">
                <p className="text-md text-gray-500 mb-2">Password</p>
                <input
                  className="border w-full rounded-md border-gray-300 p-2"
                  type="password"
                  name="password"
                  value={userData.pass}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, pass: e.target.value }))
                  }
                />
              </div>
              <p className="text-red-400">{errorMessage}</p>
              <button className="w-full bg-[#38bdf8] py-2 rounded-md text-gray-50">
                Login
              </button>
              <button
                onClick={handleGuestLogin}
                className="w-full bg-[#38bdf8] py-2 rounded-md text-gray-50 mt-2"
              >
                Guest Login
              </button>
              <div className="max-w-xl mx-auto">
                <p className="text-sm mt-8">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#38bdf8]">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
