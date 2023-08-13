import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Create from './components/Create';
import Pay from './components/Pay';
import Cart from './components/Cart';
function App() {
  return (
    
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/category/:categoryID" element={<Category />} />       
      <Route path="/product/:productID" element={<Product/>} />   
      <Route path="/login" element={<Login/>} />  
      <Route path="/register" element={<Create/>} />  
      <Route path="/payment" element={<Pay/>} /> 
      <Route path="/cart" element={<Cart/>} />      


    </Routes>
   
  
  );
}

export default App;
