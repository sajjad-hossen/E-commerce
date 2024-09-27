import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth"; // Import AuthContext

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext); // Access context for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginHandler = async (event) => {
    event.preventDefault();

    // Reset error message before each login attempt
    setError(null);

    try {
      // Use the correct login API for FakeStoreAPI
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });

      // Check if the response is not OK (i.e., status code is not in the 200 range)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Login failed. Please check your credentials."
        );
      }

      // If successful, parse the JSON response
      const data = await response.json();
      const token = data.token; // Extract token from the response
      const user = { username: username }; // Create a user object

      // Check if authCtx has the login function and use it
      if (authCtx && authCtx.login) {
        authCtx.login(user, token); // Save user and token in context
        navigate("/"); // Redirect to the home page after successful login
      } else {
        throw new Error("Authentication context not available.");
      }
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  return (
    <section
      className='min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center'
      aria-labelledby='login-title'
    >
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1
          id='login-title'
          className='text-3xl font-bold text-center text-gray-800 mb-6'
        >
          Login to Your Account
        </h1>
        {/* Display error message if any */}
        {error && (
          <p className='text-red-500 text-center' role='alert'>
            {error}
          </p>
        )}
        <form className='space-y-6' onSubmit={loginHandler}>
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-700'
            >
              Your Username
            </label>
            <input
              type='text'
              id='username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500'
              placeholder='Enter your username'
              aria-required='true'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Your Password
            </label>
            <input
              type='password'
              id='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500'
              placeholder='Enter your password'
              aria-required='true'
            />
          </div>

          <div>
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300'
            >
              Login
            </button>
          </div>
        </form>

        <p className='text-center text-sm text-gray-500 mt-4'>
          Don't have an account?{" "}
          <a href='/signup' className='text-blue-600 hover:text-blue-800'>
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
