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
            src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/logo_ynmcyu.jpg"
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
