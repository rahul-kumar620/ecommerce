// // import React from "react";
// import "./Headers.css";

// // icon section
// import { CiUser } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
// import { GiShoppingCart } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";

// const Headers = () => {
//   const navigate = useNavigate();
//   const handleLoginClick = () => {
//     navigate("/login");
//   };
//   return (
//     <>
//       <div className=" main_container ">
//         <div className="sub_logo_ancher">
//           <div className="logo">
//             <img src="\image\homepage\logo.jpg" className="header_logo" />
//             <h1 className="main_header_name">Soni Collection</h1>
//           </div>
//           {/* button desktop */}
//           <div className="list ">
//             <a href="" className="list_items">
//               Home
//             </a>
//             <a href="" className="list_items">
//               About
//             </a>
//             <a href="" className="list_items">
//               Men
//             </a>
//             <a href="" className="list_items">
//               Women
//             </a>
//             <a href="" className="list_items">
//               Girl
//             </a>
//           </div>
//         </div>
//         <div className="icon_section">
//           <CiUser className="header_icon" onClick={handleLoginClick} />
//           <CiSearch className="header_icon" />
//           <GiShoppingCart className="header_icon" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Headers;

import { useState } from "react";
import "./Headers.css";
import { CiUser, CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="main_container">
      <div className="sub_logo_ancher">
        <div className="logo">
          <img
            src="/image/homepage/logo.jpg"
            alt="Logo"
            className="header_logo"
          />
          <h1 className="main_header_name">Soni Collection</h1>
        </div>

        {/* Hamburger icon for mobile */}
        <FaBars
          className="menu_icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Navigation menu */}
        <div className={`list ${isMenuOpen ? "open" : "closed"}`}>
          <Link
            to="/"
            className="list_items"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="list_items"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/mens"
            className="list_items"
            onClick={() => setIsMenuOpen(false)}
          >
            Men
          </Link>
          <Link
            to="/womens"
            className="list_items"
            onClick={() => setIsMenuOpen(false)}
          >
            Women
          </Link>
          <Link
            to="/girls"
            className="list_items"
            onClick={() => setIsMenuOpen(false)}
          >
            Girl
          </Link>
        </div>
      </div>

      <div className="icon_section">
        <CiUser className="header_icon" onClick={handleLoginClick} />
        <CiSearch className="header_icon" />
        <GiShoppingCart className="header_icon" />
      </div>
    </div>
  );
};

export default Headers;

// https://jsonplaceholder.typicode.com/
