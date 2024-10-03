import { useContext } from "react";
import { CartContext } from "./../contexts/cart";
import Header from "../components/Header";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className='container mx-auto p-6'>
        <h4 className='text-3xl font-bold text-center text-blue-600 mb-6'>
          Product List in Your Cart
        </h4>
        <div className='overflow-x-auto rounded-lg shadow-md'>
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
      </div>
    </>
  );
};

export default Cart;
