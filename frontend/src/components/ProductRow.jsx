import { useNavigate } from "react-router-dom";
import { icons } from "../assets";

const ProductRow = ({ product }) => {
  const navigate = useNavigate();

  const handlerRemove = async (id) => {
    await fetch("http://localhost:9000/api/product/delete-product", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: id }),
    });
  };

  return (
    <tr className='product-row border-b border-gray-200 hover:bg-gray-50 transition duration-200 ease-in-out'>
      <td className='p-4'>
        <img
          src={product?.imageUrl}
          alt={product?.title}
          className='product-image w-16 h-16 object-cover rounded-md'
        />
      </td>
      <td className='p-4 text-gray-800 font-medium'>
        <h2>{product?.title}</h2>
      </td>
      <td className='p-4 text-gray-600'>
        <h2>${product?.price}</h2>
      </td>
      <td className='p-4 text-center'>
        <img
          onClick={() => navigate(`/admin/product-edit-form/${product?._id}`)}
          src={icons.editIcon}
          alt='Edit product'
          className='product-icon cursor-pointer w-6 h-6 text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out'
        />
      </td>
      <td className='p-4 text-center'>
        <img
          onClick={() => handlerRemove(product?._id)}
          src={icons.crossItem}
          alt='Delete product'
          className='product-icon cursor-pointer w-6 h-6 text-gray-500 hover:text-red-600 transition duration-150 ease-in-out'
        />
      </td>
    </tr>
  );
};

export default ProductRow;
