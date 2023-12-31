import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage} from "./Routes.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App = () => { 
   useEffect(() => {
    Store.dispatch(loadUser());
   }, [])
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/faq" element={<FAQPage/>} />
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
