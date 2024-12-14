//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import ProductAddForm from "./pages/ProductAddForm";
//import Users from "./pages/Users";
import Users from "./pages/Users";
import ProductEditForm from "./pages/ProductEditForm";
//import AuthContextProvider from "./contexts/Auth";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/admin/product-add-form' element={<ProductAddForm />} />
        <Route path='/admin/users' element={<Users />} />
        <Route
          path='/admin/product-edit-form/:id'
          element={<ProductEditForm />}
        />
      </Routes>
    </Router>
  );
};

export default App;
