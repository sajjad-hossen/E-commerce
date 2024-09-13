import React from "react";
import { Link } from "react-router-dom";
import AddressForm from "../pages/AddressForm";
import MyOrders from "../pages/MyOrders";
import OrderList from "../pages/OrderList";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Cart from "../pages/Cart";

const Header = () => {
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
            <li>
              <Link
                to='/products'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/users'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to='/cart'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to='/my-orders'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to='/order-list'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Order List
              </Link>
            </li>
            <li>
              <Link
                to='/admin/product-add-form'
                className='hover:bg-gray-700 px-4 py-2 rounded transition duration-300'
              >
                Add Product
              </Link>
            </li>
            <li>
              <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-lg transition duration-300'>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
