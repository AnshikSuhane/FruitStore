import {  Routes, Route } from "react-router-dom";

import "./App.css";

import { CartProvider } from "./Context/CartContext";

import { AuthProvider } from "./Context/AuthContext";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./pages/Home";

import About from "./pages/About";

import Cart from "./pages/Cart";

import Contact from "./pages/Contact";

import Login from "./pages/Login";

import Footer from "./Components/Footer/Footer";

import Shop from "./pages/Shop";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
