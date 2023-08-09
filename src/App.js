import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Create from './components/Create';
function App() {
  return (
    
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/category" element={<Category />} />       
      <Route path="/Product" element={<Product/>} />   
      <Route path="/Login" element={<Login/>} />  
      <Route path="/Login" element={<Create/>} />      
    </Routes>
   
  
  );
}

export default App;
