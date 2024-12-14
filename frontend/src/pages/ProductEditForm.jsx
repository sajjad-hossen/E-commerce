//import React from "react";

import { useState } from "react";

const ProductEditForm = () => {
  const [res, setRes] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:9000/api/product/add-product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            title: product.title,
            price: product.price,
            description: product.description,
            imageUrl: product.image,
            category: product.category,
          },
        }),
      }
    );
    const productData = await response.json();
    setRes(productData?.message);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        className='w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >
        <h2 className='text-2xl font-bold mb-6 text-center'>Add New Product</h2>

        {/* Title */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='title'
          >
            Product Title
          </label>
          <input
            id='title'
            name='title'
            type='text'
            placeholder='Enter product title'
            value={product.title}
            onChange={handleChange}
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        {/* Price */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='price'
          >
            Product Price
          </label>
          <input
            id='price'
            name='price'
            type='number'
            placeholder='Enter product price'
            value={product.price}
            onChange={handleChange}
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        {/* Description */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='description'
          >
            Product Description
          </label>
          <textarea
            id='description'
            name='description'
            placeholder='Enter product description'
            value={product.description}
            onChange={handleChange}
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          ></textarea>
        </div>

        {/* description  */}

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='ctg'
          >
            Product Category
          </label>
          <input
            id='ctg'
            name='category'
            type='text'
            placeholder='Enter product category'
            value={product.category}
            onChange={handleChange}
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        {/* Image */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='image'
          >
            Product Image Url Link
          </label>
          <input
            id='image'
            name='image'
            type='text'
            placeholder='Enter product Image Url link'
            value={product.image}
            onChange={handleChange}
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        {/* Submit Button */}
        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Add Product
          </button>
        </div>
        <div className='text-center mt-1'>
          {res?.length > 0 && <p className='text-green-400 '>{res}</p>}
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
