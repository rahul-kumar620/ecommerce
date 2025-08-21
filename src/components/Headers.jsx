import { useState } from "react";
import "./Headers.css";
import { CiUser } from "react-icons/ci";
import { FcLikePlaceholder } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Headers = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const handleLoginClick = () => {
    navigate("/login");
  };
  // const likeCount = Object.values(likedItems).filter(Boolean).length;
  const likedItems = useSelector((state) => state.liked);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const likeCount = Object.keys(likedItems).length;
  const cartCount = cartItems.length;

  const handleFavorites = () => {
    navigate("/favorites");
  };

  const handleCartItem = () => {
    navigate("/cartpages");
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "list_items active" : "list_items"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "list_items active" : "list_items"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/mens"
            className={({ isActive }) =>
              isActive ? "list_items active" : "list_items"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Men
          </NavLink>
          <NavLink
            to="/womens"
            className={({ isActive }) =>
              isActive ? "list_items active" : "list_items"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Women
          </NavLink>
          <NavLink
            to="/girls"
            className={({ isActive }) =>
              isActive ? "list_items active" : "list_items"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Girl
          </NavLink>
        </div>
      </div>

      <div className="icon_section">
        <CiUser className="header_icon" onClick={handleLoginClick} />
        <div>
          <GiShoppingCart onClick={handleCartItem} className="header_icon" />
          {cartCount > 0 && <span className="cart_badgeddd">{cartCount}</span>}
        </div>

        <div>
          <FcLikePlaceholder
            onClick={handleFavorites}
            className="header_icon"
          />
          {likeCount > 0 && <span className="cart_badge">{likeCount}</span>}
        </div>
      </div>
    </div>
  );
};

export default Headers;
