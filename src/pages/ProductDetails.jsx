import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/product";

const ProductDetails = () => {
  const { id } = useParams();

  // Adjusted useQuery to use an object with `queryKey` and `queryFn`
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <p className='text-center text-gray-500'>Loading...</p>;
  if (error)
    return <p className='text-center text-red-500'>Error: {error.message}</p>;

  return (
    <div className='p-8 max-w-5xl mx-auto bg-gray-100 rounded-2xl shadow-lg'>
      <header className='bg-white p-6 rounded-lg shadow-md'>
        {data && (
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 flex justify-center mb-6 md:mb-0'>
              <img
                src={data.image}
                alt={data.title}
                className='w-full h-80 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'
              />
            </div>
            <div className='md:w-1/2 md:pl-8 flex flex-col justify-between'>
              <div>
                <h1 className='text-4xl font-extrabold mb-3 text-gray-800'>
                  {data.title}
                </h1>
                <h2 className='text-3xl font-semibold mb-5 text-gray-700'>
                  Details About the Product
                </h2>
                <p className='text-gray-600 mb-6'>{data.description}</p>
                <h3 className='text-2xl font-semibold mb-3 text-gray-700'>
                  Price
                </h3>
                <p className='text-2xl font-bold text-indigo-700 mb-6'>
                  ${data.price}
                </p>
              </div>
              <div className='mt-4'>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default ProductDetails;
