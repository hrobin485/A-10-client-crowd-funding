import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/login.json"; 
import Swal from "sweetalert2";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const loggedInUser = userCredential.user;
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    localStorage.setItem("token", loggedInUser.accessToken);

    await Swal.fire({
      icon: "success",
      title: "Login Successful!",
      text: "Welcome back.",
      confirmButtonColor: "#3085d6",
    });

    navigate("/");
  } catch (error) {
    setPasswordError("Invalid email or password.");
    toast.error(error.message || "Login failed.");
  } finally {
    setLoading(false);
  }
};


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedInUser = result.user;
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("token", loggedInUser.accessToken);
      toast.success("Google login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="my-5 rounded-xl min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 overflow-hidden dark:bg-gray-700">
      {/* Left side: Login Box */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 ">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg z-10 dark:bg-gray-600 dark:text-gray-100">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-gray-100">Login Now</h1>

          {!user ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:text-black"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
              <button
                onClick={() => navigate("/")}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Go to Dashboard
              </button>
            </div>
          )}

          {!user && (
            <div className="flex justify-between items-center mt-4 text-sm">
              <button
                onClick={() => navigate("/ForgotPassword")}
                className="text-blue-600 hover:underline dark:text-gray-100"
              >
                Forgot Password?
              </button>
              <button
                onClick={() => navigate("/Register")}
                className="text-blue-600 hover:underline dark:text-gray-100"
              >
                Register
              </button>
            </div>
          )}

          {!user && (
            <div className="text-center mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Login with Google
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right side: Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Lottie animationData={loginAnimation} loop autoPlay className="w-3/4 max-w-xl" />
      </div>
    </div>
  );
};

export default Login;
