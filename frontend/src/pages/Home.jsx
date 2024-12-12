import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/product";
import ProductCard from "../components/ProductCard";
import ProductDetails from "./ProductDetails";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return <div>Loading.....</div>; // Return the loading state
  }

  if (isError) {
    return <div>Error: {error.message || "An error occurred"}</div>; // Return the error state
  }

  // Check if data is in the correct format
  const products = Array.isArray(data) ? data : data?.data;

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header Section */}
      <header className='relative overflow-hidden bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16'>
        <div className='absolute inset-0 -z-10'>
          <svg
            className='w-full h-full'
            viewBox='0 0 1460 160'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M-760 68C-760 68 5 108 646 108C1287 108 1584 -4 1590 69L1598 0L1600 160L-760 160V68Z'
              fill='url(#paint0_linear)'
            />
            <defs>
              <linearGradient id='paint0_linear' x1='0' x2='1' y1='1' y2='0'>
                <stop stopColor='#34D399' />
                <stop offset='1' stopColor='#9333EA' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='container mx-auto px-4 relative z-10'>
          <h1 className='text-5xl font-extrabold leading-tight text-center mb-4'>
            Discover Amazing Products
          </h1>
          <p className='text-center text-xl mb-8'>
            Explore our curated collection of top-quality items at unbeatable
            prices.
          </p>
          <div className='flex justify-center'>
            <input
              type='text'
              placeholder='Search for products...'
              className='w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
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

          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products?.length ? (
              products.map((item) => (
                <li key={item.id}>
                  <ProductCard product={item} />
                </li>
              ))
            ) : (
              <p>No products available</p>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
