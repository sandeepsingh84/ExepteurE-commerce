import logo from "./logo.svg";
// import './App.css';
import { Header } from "./Header";
import { Navbar } from "./Header/Navbar";
import { Card } from "./Header/Card";

import { Route, Router, Routes } from "react-router-dom";
import { About } from "./Header/Navbar/About";
import { ContactUs } from "./Pages/ContactUs";
import Services from "./Components/OurServices/Services";
import Login from "./Pages/Loginpage/Login";
import Footermain from "./Components/Footer/Footermain";
import { DummyAPI } from "./DummyAPI";
import { Home } from "./Home";
import { Product } from "./Product";

import { CustomModal } from "./CustomModal";
import Layout from "./Components/Layout";

import ProductsListData from "./ProductsListData";
import { SingleproductList } from "./SingleproductList";
import {  LoginPage } from "./LoginPage";
import { useState } from "react";


function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log('cartItems', cartItems);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/productList/:catId"
          element={
            <Layout>
            
              <ProductsListData />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/SingleproductList/:productId"
          element={
            <Layout>
              <SingleproductList setCartItems={setCartItems}/>
            </Layout>
          }
        />
      </Routes> 
      {/* <ContactUs />
      <Card />
      <Services />
      <Login /> 
      <Footermain />
       
      <DummyAPI />
      <Home />
      <Product />  
      <Smartphones/> */}

      {/* <CustomModal/> */}
      {/* <LoginPage/> */}
      
    </div>
  );
}

export default App;
