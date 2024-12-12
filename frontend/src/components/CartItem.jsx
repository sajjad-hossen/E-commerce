import { useContext, useState } from "react";
import { icons } from "../assets/index";
import {
  REMOVE_ITEM_FROM_CART,
  MODIFY_QUANTITY_OF_A_ITEM,
} from "../actions/cart";
import { CartContext } from "../contexts/cart";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { dispatchCartAction } = useContext(CartContext);
  const [isSelected, setIsSelected] = useState(false); // Track if the row is clicked

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    dispatchCartAction({
      type: MODIFY_QUANTITY_OF_A_ITEM,
      payload: { id: item.id, quantity: newQuantity },
    });
  };

  const handleRowClick = () => {
    setIsSelected(!isSelected); // Toggle row selection on click
  };

  return (
    <tr
      className={`cursor-pointer transition duration-200 ease-in-out ${
        isSelected
          ? "bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 shadow-lg transform scale-105"
          : "hover:bg-gray-100 hover:shadow-sm"
      }`}
      onClick={handleRowClick} // Row click handler
    >
      {/* Product Image */}
      <td className='py-4 px-6'>
        <div className='product'>
          <img
            src={item.image}
            alt={item.title}
            className='w-32 h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105'
          />
        </div>
      </td>

      {/* Product Name */}
      <td className='py-4 px-6'>
        <p className='text-sm font-semibold text-gray-900 break-words hover:text-blue-600 transition-colors'>
          {item.title}
        </p>
      </td>

      {/* Product Price */}
      <td className='py-4 px-6'>
        <p className='text-lg font-bold text-indigo-600'>${item.price}</p>
      </td>

      {/* Product Quantity */}
      <td className='py-4 px-6'>
        <div className='qty-input flex items-center'>
          <button
            className='qty-count bg-indigo-500 text-white px-3 py-1 rounded-full mr-2 hover:bg-indigo-600 focus:outline-none transition-colors'
            data-action='minus'
            type='button'
            onClick={() => {
              if (quantity > 1) {
                updateQuantity(quantity - 1);
              }
            }}
          >
            <img
              src={icons.minus}
              alt='Decrease quantity'
              className='w-4 h-4'
            />
          </button>
          <input
            type='number'
            name='product-qty'
            className='product-qty w-12 text-center border-2 border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-shadow'
            value={quantity}
            min='1'
            onChange={(e) => {
              const newQty = parseInt(e.target.value);
              if (newQty > 0) {
                updateQuantity(newQty);
              }
            }}
          />
          <button
            className='qty-count bg-indigo-500 text-white px-3 py-1 rounded-full ml-2 hover:bg-indigo-600 focus:outline-none transition-colors'
            data-action='add'
            type='button'
            onClick={() => {
              updateQuantity(quantity + 1);
            }}
          >
            <img src={icons.plus} alt='Increase quantity' className='w-4 h-4' />
          </button>
        </div>
      </td>

      {/* Product Subtotal (Total Price) */}
      <td className='py-4 px-6'>
        <p className='text-lg font-extrabold text-purple-600'>
          ${item.quantity ? (item.price * item.quantity).toFixed(2) : 0}
        </p>
      </td>

      {/* Action (Cross Icon to Remove Item) */}
      <td className='py-4 px-6'>
        <img
          src={icons.crossItem}
          alt='Remove item'
          className='product-icon w-6 h-6 cursor-pointer transition-transform transform hover:scale-125 hover:text-red-500 hover:shadow-md hover:bg-red-100 rounded-full p-1'
          onClick={() =>
            dispatchCartAction({
              type: REMOVE_ITEM_FROM_CART,
              payload: item.id,
            })
          }
        />
      </td>
    </tr>
  );
};

export default CartItem;
