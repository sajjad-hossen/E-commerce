import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const emailInputRef = useRef();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null); // State to store error messages
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const userName = userNameInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || !userName || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { userName, password, email } }),
      });
      const user = await response.json();
      if (user?.status == true) {
        navigation("/login");
      } else {
        setErrorMessage(user?.message);
      }
    } catch (error) {
      setErrorMessage(error.message); // Set the error message to state
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Signup to Our Application
        </h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              ref={emailInputRef}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              placeholder='Enter your email'
              required
            />
          </div>

          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-700'
            >
              Username
            </label>
            <input
              type='text'
              name='username'
              ref={userNameInputRef}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              placeholder='Enter your username'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              ref={passwordInputRef}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              placeholder='Enter your password'
              required
            />
          </div>

          {errorMessage && (
            <div className='text-red-500 text-center mt-4'>{errorMessage}</div>
          )}

          <div>
            <button
              type='submit'
              className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300'
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='text-center text-sm text-gray-500 mt-4'>
          Already have an account?{" "}
          <a href='/login' className='text-indigo-600 hover:text-indigo-800'>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
