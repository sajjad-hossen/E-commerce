import React, { useContext } from "react"; // Import useContext
import { Link } from "react-router-dom";
import { AuthContext } from "./../contexts/Auth"; // Import AuthContext

const Header = () => {
  const authCtx = useContext(AuthContext); // Use useContext to access AuthContext

  return (
    <header className='bg-gray-800 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        {/* Logo Section */}
        <div className='flex items-center'>
          {/* Brand Name to the left of the logo */}
          <div className='flex flex-col items-center'>
            <img
              src='./../../photo/photo/logo.png'
              alt='Logo'
              className='h-12 w-auto'
            />
            <div className='mt-1 text-sm font-light text-gray-300'>
              <span className='bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text'>
                it's Easy
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav>
          <ul className='flex space-x-6'>
            <li>
              <Link
                to='/'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Home
              </Link>
            </li>
            {/* Conditional rendering for admin/super-admin */}
            {authCtx.isUserLoggedIn && (
              <li>
                <Link
                  to='/products'
                  className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                >
                  Products
                </Link>
              </li>
            )}
            {authCtx.isUserLoggedIn &&
              (authCtx?.user?.special_users === "super-admin" ||
                authCtx?.user?.special_users === "admin") && (
                <li>
                  <Link
                    to='/users'
                    className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                  >
                    Users
                  </Link>
                </li>
              )}
            <li>
              <Link
                to='/cart'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Cart
              </Link>
            </li>
            {authCtx.isUserLoggedIn && (
              <li>
                <Link
                  to='/my-orders'
                  className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                >
                  My Orders
                </Link>
              </li>
            )}
            {authCtx.isUserLoggedIn &&
              (authCtx?.user?.special_users === "super-admin" ||
                authCtx?.user?.special_users === "admin") && (
                <li>
                  <Link
                    to='/order-list'
                    className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                  >
                    Order List
                  </Link>
                </li>
              )}
            {authCtx.isUserLoggedIn &&
              (authCtx?.user?.special_users === "super-admin" ||
                authCtx?.user?.special_users === "admin") && (
                <li>
                  <Link
                    to='/admin/product-add-form'
                    className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                  >
                    Add Product
                  </Link>
                </li>
              )}
            {/* Conditionally render Signup and Login links if user is not logged in */}
            {!authCtx.isUserLoggedIn && (
              <>
                <li>
                  <Link
                    to='/signup'
                    className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {/* Logout button */}
            {authCtx.isUserLoggedIn && (
              <li>
                <button
                  onClick={authCtx.logout} // Call the logout function from context
                  className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-lg transition duration-300'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
