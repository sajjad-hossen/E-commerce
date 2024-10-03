import { useContext, useState } from "react";
import { icons } from "../assets";
import {
  REMOVE_ITEM_FROM_CART,
  MODIFY_QUANTITY_OF_A_ITEM,
} from "../actions/cart";
import { CartContext } from "../contexts/cart";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { dispatchCartAction } = useContext(CartContext); // Correct destructuring

  // Function to update the quantity
  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    dispatchCartAction({
      type: MODIFY_QUANTITY_OF_A_ITEM,
      payload: { id: item.id, quantity: newQuantity },
    });
  };

  return (
    <tr>
      <td>
        <div className='product'>
          <img src={item.photo} alt={item.name} />
        </div>
      </td>
      <td>
        <p>{item.name}</p> {/* Correct display of item name */}
      </td>
      <td>${item.price}</td>
      <td>
        <div className='qty-input'>
          <button
            className='qty-count'
            data-action='minus'
            type='button'
            onClick={() => {
              if (quantity > 1) {
                updateQuantity(quantity - 1); // Simplified decrement logic
              }
            }}
          >
            <figure>
              <img src={icons.minus} alt='' />
            </figure>
          </button>
          <input
            type='number'
            name='product-qty'
            className='product-qty'
            value={quantity}
            min='1'
            onChange={(e) => {
              const newQty = parseInt(e.target.value);
              if (newQty > 0) {
                updateQuantity(newQty); // Simplified change handler
              }
            }}
          />
          <button
            className='qty-count'
            data-action='add'
            type='button'
            onClick={() => {
              updateQuantity(quantity + 1); // Simplified increment logic
            }}
          >
            <figure>
              <img src={icons.plus} alt='' />
            </figure>
          </button>
        </div>
      </td>
      <td>${item.quantity ? item.price * item.quantity : 0}</td>
      <td>
        <img
          src={icons.minus}
          alt=''
          className='product-icon'
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
