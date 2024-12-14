import ProductRow from "./../components/ProductRow";
import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        "http://localhost:9000/api/product/get-product",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const productData = await response.json();
      setProduct(productData?.product);
    };
    getProduct();
  }, []);

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8'>
      <header className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Product List in Your App
        </h1>
      </header>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='p-4 border-b font-semibold'>Image</th>
                <th className='p-4 border-b font-semibold'>Title</th>
                <th className='p-4 border-b font-semibold'>Price</th>
                <th className='p-4 border-b font-semibold'>Edit</th>
                <th className='p-4 border-b font-semibold'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {product?.length > 0 &&
                product.map((item) => (
                  <ProductRow key={item._id} product={item} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Products;
