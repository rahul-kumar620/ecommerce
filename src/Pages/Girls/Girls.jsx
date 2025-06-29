// scss

import { IoEyeOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
import "./Girls.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Girls = ({ likedItems, setLikedItems }) => {
  // const [likedItems, setLikedItems] = useState({});
  // filter ke liye
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const handleLike = (section, id) => {
    const likeKey = `${section}-${id}`;
    setLikedItems((prev) => ({
      ...prev,
      [likeKey]: !prev[likeKey],
    }));
  };
  const handleView = (product) => {
    navigate(`/Productdetails/${product.id}`, { state: { product } });
  };
  // const handleView = (id) => {
  //   navigate(`/Productdetails/${id}`);
  // };
  // filter code likhe toggle ke liye
  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };
  const products = {
    newArrivals: [
      {
        id: 1,
        name: "Elegant Straight Cotton Kurti",
        title: "Women’s Casual Straight Kurti with Side Slits",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865427/pexels-shootsaga-30809730_nrurvm.webp",
        price: "1600",
        span: "1100",
        inStock: true,
      },
      {
        id: 2,
        name: "Floral Print A-Line Kurti",
        title: "Rayon A-Line Kurti with Floral Pattern and 3/4 Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865428/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy3_p8wvbi.webp",
        price: "1400",
        span: "1200",
        inStock: false,
      },
      {
        id: 3,
        name: "Classic Printed Cotton Kurti",
        title: "Ethnic Straight Kurti with Block Print Design",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "1200",
        span: "800",
      },
      {
        id: 4,
        name: "Elegant Kurti with Embroidery",
        title: "Designer Kurti with Intricate Thread Work",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808440/pexels-mk-1182794846-22431192_xp4umg.webp",
        price: "1300",
        span: "900",
      },
      {
        id: 5,
        name: "Block Print Cotton Kurti",
        title: "Women’s Casual Block Print Straight Kurti",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "1700",
        span: "1500",
      },
      {
        id: 6,
        name: "Comfort Fit Rayon Kurti",
        title: "Lightweight Rayon Kurti for Daily Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "1599",
        span: "1299",
      },
      {
        id: 7,
        name: "Elegant Printed Kurti",
        title: "Stylish Kurti with Allover Print & Button Detailing",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "1299",
        span: "1199",
      },
      {
        id: 8,
        name: "Traditional Cotton Kurti",
        title: "Classic Cotton Kurti with Embroidered Yoke",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "899",
        span: "999",
      },
    ],
    bestSellers: [
      {
        id: 9,
        name: "Winter Velvet Kurti",
        title: "Women’s Velvet Kurti with Full Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808445/pexels-mk-1182794846-22064227_xmiygk.webp",
        price: "1650",
        span: "1300",
      },
      {
        id: 10,
        name: "Festive Embroidered Kurti",
        title: "Embroidered Anarkali Kurti for Festive Occasions",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-neha-mishra-1851906907-28512776_dz74dx.webp",
        price: "$35",
      },
      {
        id: 11,
        name: "Denim Style Kurti",
        title: "Trendy Denim Kurti with Button Front",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/71lSQmEASkL._AC_UY1100__lyfpf7.jpg",
        price: "$29",
      },
      {
        id: 12,
        name: "Elegant Print Kurti",
        title: "Casual Printed Kurti with Straight Fit",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/71lSQmEASkL._AC_UY1100__lyfpf7.jpg",
        price: "$50",
      },
    ],
    saleItems: [
      {
        id: 13,
        name: "Simple Cotton Kurti",
        title: "Basic Cotton Kurti for Everyday Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$10",
      },
      {
        id: 14,
        name: "Water-Resistant Kurti",
        title: "Kurti with Water-Repellent Finish for Outdoor Use",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$18",
      },
      {
        id: 15,
        name: "Graphic Printed Kurti",
        title: "Modern Kurti with Stylish Graphic Prints",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$12",
      },
      {
        id: 16,
        name: "Comfort Fit Cotton Kurti",
        title: "Breathable Cotton Kurti for Casual Days",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$22",
      },
    ],
  };

  const allProducts = [
    ...products.newArrivals,
    ...products.bestSellers,
    ...products.saleItems,
  ];
  return (
    <>
      <div className="main-container-girls">
        <div className="heading-section">
          <p className="text-head">GIRLS</p>
        </div>
        <div className="filter-section">
          <div className="left-filter-side">
            <p className="left-side-text">Filtered By:</p>

            <div className="dropdown">
              <p
                className="left-side-texts"
                onClick={() => toggleDropdown("productType")}
              >
                Product Type {openDropdown === "productType" ? "v" : "v"}
              </p>
              {openDropdown === "productType" && (
                <div
                  className={`dropdown-content ${
                    openDropdown === "productType" ? "open" : ""
                  }`}
                >
                  <label>
                    <input type="checkbox" /> Shirt
                  </label>
                  <label>
                    <input type="checkbox" /> Pants
                  </label>
                  <label>
                    <input type="checkbox" /> Jackets
                  </label>
                </div>
              )}
            </div>

            <div className="dropdown">
              <p
                className="left-side-texts"
                onClick={() => toggleDropdown("size")}
              >
                Size {openDropdown === "size" ? "▲" : "▼"}
              </p>
              {openDropdown === "size" && (
                <div
                  className={`dropdown-content ${
                    openDropdown === "size" ? "open" : ""
                  }`}
                >
                  <label>
                    <input type="checkbox" /> S
                  </label>
                  <label>
                    <input type="checkbox" /> M
                  </label>
                  <label>
                    <input type="checkbox" /> L
                  </label>
                  <label>
                    <input type="checkbox" /> XL
                  </label>
                </div>
              )}
            </div>

            <div className="dropdown">
              <p
                className="left-side-texts"
                onClick={() => toggleDropdown("color")}
              >
                Colour/Variant {openDropdown === "color" ? "▲" : "▼"}
              </p>
              {openDropdown === "color" && (
                <div
                  className={`dropdown-content ${
                    openDropdown === "color" ? "open" : ""
                  }`}
                >
                  <label>
                    <input type="checkbox" /> Red
                  </label>
                  <label>
                    <input type="checkbox" /> Blue
                  </label>
                  <label>
                    <input type="checkbox" /> Green
                  </label>
                </div>
              )}
            </div>

            <div className="dropdown">
              <p
                className="left-side-texts"
                onClick={() => toggleDropdown("price")}
              >
                Price Range {openDropdown === "price" ? "▲" : "▼"}
              </p>
              {openDropdown === "price" && (
                <div
                  className={`dropdown-content ${
                    openDropdown === "price" ? "open" : ""
                  }`}
                >
                  <label>
                    <input type="checkbox" /> ₹0 - ₹500
                  </label>
                  <label>
                    <input type="checkbox" /> ₹500 - ₹1000
                  </label>
                  <label>
                    <input type="checkbox" /> ₹1000+
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="right-side-sorted">
            <button className="right-side-sorteds">
              <span>Sorted by</span>
              <p>Popularity</p>
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="main-girls-section">
          {allProducts.map((product) => (
            <div key={product.id} className="all-content-section">
              <div className="image-main-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="image-section-girls"
                />
                <div className="overlay_buttons">
                  <button
                    className="like_btn"
                    onClick={() => handleLike("girls", product.id)}
                  >
                    {likedItems[`girls-${product.id}`] ? (
                      <IoHeartSharp className="text-red-500 " />
                    ) : (
                      <IoHeartOutline className="like_btn" />
                    )}
                  </button>
                  {/* <button className="buy_now_btn">Buy Now</button> */}
                  {product.inStock ? (
                    <button className="buy_now_btn in-stock">In Stock</button>
                  ) : (
                    <button className="buy_now_btn out-of-stock">
                      Out of Stock
                    </button>
                  )}
                  <button
                    className="view_btn"
                    onClick={() => handleView(product)}
                  >
                    <IoEyeOutline className="view_btn" />
                  </button>
                </div>
              </div>
              <div className="info">
                <p className="product-name">{product.name}</p>
              </div>
              <div className="pricing">
                <p className="product-price">&#8377;{product.price}</p>
                <p className="product-span strike-price ">
                  &#8377;{product.span}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
Girls.propTypes = {
  likedItems: PropTypes.object.isRequired,
  setLikedItems: PropTypes.func.isRequired,
};
export default Girls;
