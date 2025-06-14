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
// import Productdetails from "./Productdetails";
// import Productlist from "./Productlist";

function App() {
  return (
    <Router basename="/ecommerce">
      {/* <Header /> */}
      <Headers />
      <Routes>
        <Route path="/" element={<HomeSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Women />} />
        {/* <Route path="/Productdetails/:id" element={<Productdetails />} />
        <Route path="/" element={<Productlist />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
