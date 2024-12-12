import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cart";
import { ADD_TO_CART } from "../actions/cart";
function ProductCard({ product }) {
  const { dispatchCartAction } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)} // Fixed template literal
      className='bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 ease-in-out flex flex-col cursor-pointer' // Added cursor-pointer for better UX
    >
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-48 object-cover rounded-t-lg mb-4'
      />
      <div className='flex-grow'>
        <h2 className='text-lg font-semibold mb-2 text-gray-900'>
          {product.name}
        </h2>
        <p className='text-indigo-600 font-bold mt-2'>${product.price}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatchCartAction({
            type: ADD_TO_CART,
            payload: product,
          });
        }}
        className='mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out'
      >
        ADD to Cart
      </button>
    </div>
  );
}

export default ProductCard;
