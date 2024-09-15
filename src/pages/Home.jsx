import React from "react";

const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        {/* Header Section */}
        <header className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 min-h-[300px] flex flex-col justify-center'>
          <div className='container mx-auto px-4'>
            <h1 className='text-4xl font-bold tracking-wide text-center mb-4'>
              Welcome to Our E-Commerce Site
            </h1>
            <p className='text-center text-xl'>
              Find the best products at the most affordable prices.
            </p>
          </div>
        </header>

        {/* Products Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-extrabold text-gray-800'>
                Our Top Products
              </h2>
              <p className='text-lg text-gray-500 mt-2'>
                Browse through our range of high-quality products.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
