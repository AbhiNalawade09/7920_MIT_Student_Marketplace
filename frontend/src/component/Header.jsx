import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginModal = ({ isOpen, toggleModal, setIsAuthenticated }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      if (isRegistering) {
        // Registration API Call
        const response = await axios.post("/api/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setMessage("Registration successful! Please login.");
        setIsRegistering(false);
      } else {
        // Login API Call
        const response = await axios.post("/api/users/login", {
          email: formData.email,
          password: formData.password,
        });
        const { token } = response.data;

        // Store the token for authentication
        localStorage.setItem("authToken", token);
        setIsAuthenticated(true); // Update the parent state
        setMessage("Login successful!");
        toggleModal();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {isRegistering ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Create an Account
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
              <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegistering(false);
                  }}
                >
                  Login
                </a>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Welcome Back
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
              <div className="text-center mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegistering(true);
                  }}
                >
                  Register
                </a>
              </div>
            </form>
          </>
        )}
        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
      </div>
    </div>
  );
};

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        return alert("No token found. Please log in.");
      }
  
      await axios.post(
        "/api/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Clear client-side storage and update state
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      alert("Logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      alert("Failed to log out. Please try again.");
    }
  };
  

  return (
    <header className="bg-white w-full shadow-md py-4 px-6 sm:px-10">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">MIT Marketplace</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Packages
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Categories
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Reviews
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Deals
          </a>
        </nav>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={toggleLoginModal}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        )}
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        toggleModal={toggleLoginModal}
        setIsAuthenticated={setIsAuthenticated}
      />
    </header>
  );
};

export default Header;