import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import Cart from "../Pages/Cart"
import ProductDetails from "../Pages/ProductDetailes"
import Checkout from "../Pages/Checkout"
import Login from "../Pages/authentication/Login"
import Register from "../Pages/authentication/Register"
const Router = () => {
  return <Routes>
    <Route path='/' element={<Navigate to="home" />} />
     <Route path='/home'  element={<Home />} />
     <Route path='/shop'  element={<Shop />} />
     <Route path='/shop/:id'  element={<ProductDetails />} />
     <Route path='/cart'  element={<Cart />} />
     <Route path='/checkout'  element={<Checkout />} />
     <Route path='/login'  element={<Login />} />
     <Route path='/sign-up'  element={<Register />} />
  </Routes>
}

export default Router