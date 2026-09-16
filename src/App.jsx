import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductsApi from "./components/products/ProductsApi";
import ProductDetail from "./components/products/ProductDetail";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import RootLayout from "./layout/Rootlayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>

        <Route index element={<h1>Home</h1>} />

        <Route path="products" element={<ProductsApi />} />

        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<Contact />} />

      </Route>
    </Routes>
  );
};

export default App;