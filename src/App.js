import React from "react";
import Menu from "./component/Menu";
import About from "./component/About";
import Footer from "./component/Footer";
import Vision from "./component/Vision";
import Support from "./component/Support";
import Products from "./component/Product";
import Guidelines from "./component/Guidelines";
import { Routes, Route } from "react-router-dom";
import AddProducts from "./component/AddProducts";
import UpdateProducts from "./component/UpdateProduct";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Add-Products" element={<AddProducts />} />
        <Route path="/UpdateProducts/:id" element={<UpdateProducts />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/support" element={<Support />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
