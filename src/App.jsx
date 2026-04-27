import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import ProductDetail from './ProductDetail';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
