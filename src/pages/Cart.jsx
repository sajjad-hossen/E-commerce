import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./../contexts/cart";
import CartItem from "../components/CartItem";
import { CLEAR_CART } from "../actions/cart";
import { AuthContext } from "./../contexts/Auth";

const Cart = () => {
  const authContext = useContext(AuthContext);
  const { cart, dispatchCartAction } = useContext(CartContext);
  const navigate = useNavigate(); // Correct usage of useNavigate hook
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.price * item.quantity));

  return (
    <div className='container mx-auto p-6'>
      <h4 className='text-3xl font-bold text-center text-blue-600 mb-6'>
        Product List in Your Cart
      </h4>

      <div className='overflow-x-auto rounded-lg shadow-md mb-6'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead className='bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
            <tr>
              <th className='py-3 px-4 text-left text-sm font-medium'>
                Product Image
              </th>
              <th className='py-3 px-4 text-left text-sm font-medium'>
                Product Name
              </th>
              <th className='py-3 px-4 text-left text-sm font-medium'>
                Product Price
              </th>
              <th className='py-3 px-4 text-left text-sm font-medium'>
                Product Quantity
              </th>
              <th className='py-3 px-4 text-left text-sm font-medium'>
                Product Subtotal
              </th>
              <th className='py-3 px-4 text-left text-sm font-medium'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Price Section */}
      <h2 className='text-2xl font-bold text-center text-gray-800'>
        Your Total Price will be{" "}
        <span className='text-blue-500'>${totalAmount.toFixed(2)}</span>
      </h2>

      {/* Buttons Section */}
      <div className='flex justify-center space-x-6 mt-8'>
        {/* Clear Cart Button */}
        <button
          className='px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200'
          onClick={() => {
            dispatchCartAction({
              type: CLEAR_CART,
            });
          }}
        >
          Clear Cart
        </button>

        {/* Place Order Button */}
        <button
          type='button'
          className='px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-200'
          onClick={() => {
            if (!authContext.isUserLoggedIn) {
              alert("Please log in to place an order.");
              return;
            }
            navigate("/order-placing-form");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
