import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SingleProduct from "./SingleProduct";
import Confirmation from "./Confirmation";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import AdminHome from "./Admin/AdminHome";
import Maincategory from "./Admin/Maincategory";
import AddMaincategory from "./Admin/AddMaincategory";
import UpdateMaincategory from "./Admin/UpdateMaincategory";

import Subcategory from "./Admin/Subcategory";
import AddSubcategory from "./Admin/AddSubcategory";
import UpdateSubcategory from "./Admin/UpdateSubcategory";

import Brand from "./Admin/Brand";
import AddBrand from "./Admin/AddBrand";
import UpdateBrand from "./Admin/UpdateBrand";

import Product from "./Admin/Product";
import AddProduct from "./Admin/AddProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/admin" element={<AdminHome />} />

          <Route path="/admin-maincategory" element={<Maincategory />} />
          <Route path="/admin-add-maincategory" element={<AddMaincategory />} />
          <Route path="/admin-update-maincategory/:id/" element={<UpdateMaincategory />} />

          
          <Route path="/admin-subcategory" element={<Subcategory />} />
          <Route path="/admin-add-subcategory" element={<AddSubcategory />} />
          <Route path="/admin-update-subcategory/:id/" element={<UpdateSubcategory />} />

          <Route path="/admin-brand" element={<Brand />} />
          <Route path="/admin-add-brand" element={<AddBrand />} />
          <Route path="/admin-update-brand/:id/" element={<UpdateBrand />} />

          <Route path="/admin-product" element={<Product />} />
          <Route path="/admin-add-product" element={<AddProduct />} />
          <Route path="/admin-update-product/:id/" element={<UpdateProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
