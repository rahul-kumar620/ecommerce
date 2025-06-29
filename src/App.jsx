// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import HomeSlider from "./Pages/Home/HomeSlider";
import About from "./Pages/About/About";
import Boys from "./Pages/Boys/Boys";
import Girls from "./Pages/Girls/Girls";
import Mens from "./Pages/Mens/Mens";
import Women from "./Pages/Womens/Womens";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Login from "./Pages/Login/Login";
import ProductDetails from "./components/ProductDetails";
import { useEffect, useState } from "react";
import Favorites from "./components/Favorites";

function App() {
  const [likedItems, setLikedItems] = useState(() => {
    const storedLikes = localStorage.getItem("likedItems");
    return storedLikes ? JSON.parse(storedLikes) : {};
  });

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <Router basename="/ecommerce">
      {/* <Header /> */}
      <Headers likedItems={likedItems} />
      <Routes>
        <Route
          path="/"
          element={
            <HomeSlider likedItems={likedItems} setLikedItems={setLikedItems} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/boys" element={<Boys />} />
        <Route
          path="/girls"
          element={
            <Girls likedItems={likedItems} setLikedItems={setLikedItems} />
          }
        />
        <Route path="/mens" element={<Mens />} />
        <Route
          path="/womens"
          element={
            <Women likedItems={likedItems} setLikedItems={setLikedItems} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Productdetails/:id" element={<ProductDetails />} />
        <Route
          path="/favorites"
          element={<Favorites likedItems={likedItems} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
