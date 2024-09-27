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
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "../components/PrivateRoute";
import PrivateAdminRoute from "../components/PrivateAdminRoute";
import ProductEditForm from "./../pages/ProductEditForm";

const App = () => {
  return (
    <Router>
      <Header /> {/* Ensure Header is inside Router */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/order-placing-form'
          element={
            <PrivateRoute>
              <AddressForm />
            </PrivateRoute>
          }
        />
        <Route
          path='/my-orders'
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        />
        <Route
          path='/order-list'
          element={
            <PrivateAdminRoute>
              <OrderList />
            </PrivateAdminRoute>
          }
        />
        <Route
          path='/admin/product-form'
          element={
            <PrivateAdminRoute>
              <ProductAddForm />
            </PrivateAdminRoute>
          }
        />
        <Route
          path='/admin/users'
          element={
            <PrivateAdminRoute>
              <Users />
            </PrivateAdminRoute>
          }
        />
        <Route
          path='/products'
          element={
            <PrivateAdminRoute>
              <Products />
            </PrivateAdminRoute>
          }
        />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/admin/product-edit-form/:id'
          element={
            <PrivateAdminRoute>
              <ProductEditForm />
            </PrivateAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
