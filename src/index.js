import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/category.css'
import './css/home.css'
import './css/Product.css'
import './css/Login.css'
import './css/pay.css'
// slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// TOAST
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
const toastStyle = {color: '#fff',}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer style={toastStyle} />
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
