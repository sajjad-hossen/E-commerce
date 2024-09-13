import React from "react";

const Header = () => {
  return (
    <header className='bg-gray-800 p-4 text-white text-center'>
      <h1 className='text-3xl font-bold'>My Website Header</h1>
      <nav>
        <ul className='flex justify-center space-x-6 mt-4'>
          <li>
            <a href='/' className='text-white hover:text-gray-300'>
              Home
            </a>
          </li>
          <li>
            <a href='/about' className='text-white hover:text-gray-300'>
              About
            </a>
          </li>
          <li>
            <a href='/contact' className='text-white hover:text-gray-300'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
