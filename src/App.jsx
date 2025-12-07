// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="plant-care" element={<PlantCare />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
  );
}

export default App;
