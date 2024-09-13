import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "../components/Header";
import Signup from "../pages/Signup";
import AddressForm from "../pages/AddressForm";
import MyOrders from "../pages/MyOrders";
import OrderList from "../pages/OrderList";
import ProductAddForm from "../pages/ProductAddForm";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const App = () => {
  return (
    <Router>
      <Header /> {/* Ensure Header is inside Router */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/order-placing-form' element={<AddressForm />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/order-list' element={<OrderList />} />
        <Route path='/admin/product-form' element={<ProductAddForm />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/product-edit-form/:id' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
