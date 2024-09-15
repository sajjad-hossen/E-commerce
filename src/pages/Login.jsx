import React, { useRef } from "react";

const Login = () => {
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <>
      <section className='min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
            Login to Your Account
          </h1>
          <form className='space-y-6'>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-700'
              >
                Your User Name
              </label>
              <input
                type='text'
                id='username'
                required
                ref={userNameInputRef}
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500'
                placeholder='Enter your username'
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
                ref={passwordInputRef}
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500'
                placeholder='Enter your password'
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
    </>
  );
};

export default Login;
