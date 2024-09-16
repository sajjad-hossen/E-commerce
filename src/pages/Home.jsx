import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/product";

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

  return (
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

          <ul>
            {data?.data.map((item) => (
              <li key={item.id} className='mb-4 p-4 border rounded'>
                <h3 className='text-xl font-semibold'>{item.name}</h3>
                <p className='text-gray-700'>{item.description}</p>
                <p className='text-gray-500'>EAN: {item.ean}</p>
                <p className='text-gray-500'>UPC: {item.upc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
