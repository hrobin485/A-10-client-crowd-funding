import React from 'react';

const LogIn = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
  
          {/* If the user is logged in, show profile picture; otherwise, show login form */}
          {!user ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle the eye icon */}
                  </span>
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              {/* Profile Picture and User Info */}
              <img
                src={user.photoURL || "https://via.placeholder.com/150"} // Show user's photo or placeholder if no photo
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
              <button
                onClick={() => navigate("/")} // Redirect to home
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Go to Dashboard
              </button>
            </div>
          )}
  
          {/* Links for forgot password and register */}
          {!user && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => navigate("/ForgotPassword")}
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot Password?
              </button>
              <button
                onClick={() => navigate("/Register")}
                className="text-blue-500 hover:underline text-sm"
              >
                Register
              </button>
            </div>
          )}
  
          {/* Google Login */}
          {!user && (
            <div className="text-center mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Login with Google
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

export default LogIn;