import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/product";
import Header from "../components/Header";

const ProductAddForm = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });

  const queryClient = useQueryClient();

  const createProductMutation = useMutation({
    mutationFn: (formData) => createProduct(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] }); // Refresh product list
    },
    onError: (error) => {
      console.error("Failed to create product:", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.image);

    createProductMutation.mutate(formData);
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

        {/* Image */}
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='image'
          >
            Product Image
          </label>
          <input
            id='image'
            name='image'
            type='file'
            onChange={handleImage}
            required
            className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
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
      </form>
    </div>
  );
};

export default ProductAddForm;
