import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { icons } from "../assets";
import { removeProduct } from "../services/product";

const ProductRow = ({ item }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const removeProductMutation = useMutation({
    mutationFn: (id) => removeProduct(id),
    onMutate: async (id) => {
      // Optimistic update: remove product from cache before API call
      await queryClient.cancelQueries(["products"]);
      const previousProducts = queryClient.getQueryData(["products"]);

      queryClient.setQueryData(["products"], (old) =>
        old ? old.filter((product) => product.id !== id) : []
      );

      return { previousProducts };
    },
    onError: (error, id, context) => {
      // Rollback on error
      queryClient.setQueryData(["products"], context.previousProducts);
      console.error("Failed to remove product:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      removeProductMutation.mutate(item.id);
    }
  };

  return (
    <tr className='product-row border-b border-gray-200 hover:bg-gray-50 transition duration-200 ease-in-out'>
      <td className='p-4'>
        <img
          src={item.image}
          alt={item.title}
          className='product-image w-16 h-16 object-cover rounded-md'
        />
      </td>
      <td className='p-4 text-gray-800 font-medium'>
        <h2>{item.title}</h2>
      </td>
      <td className='p-4 text-gray-600'>
        <h2>${item.price}</h2>
      </td>
      <td className='p-4 text-center'>
        <img
          onClick={() => navigate(`/admin/product-edit-form/${item.id}`)}
          src={icons.editIcon}
          alt='Edit product'
          className='product-icon cursor-pointer w-6 h-6 text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out'
        />
      </td>
      <td className='p-4 text-center'>
        <img
          onClick={handleRemove}
          src={icons.crossItem}
          alt='Delete product'
          className='product-icon cursor-pointer w-6 h-6 text-gray-500 hover:text-red-600 transition duration-150 ease-in-out'
        />
      </td>
    </tr>
  );
};

export default ProductRow;
