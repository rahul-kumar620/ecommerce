// import React from "react";
import "./HomeSlider.scss";
import "./HomeSlider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

// icon section

import { IoStarOutline } from "react-icons/io5";
import { IoHeartOutline, IoHeartSharp, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HomeSlider = () => {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [likedItems, setLikedItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("newArrivals");

  const navigate = useNavigate();

  const handleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleView = (id) => {
    navigate(`/Productdetails/${id}`);
  };

  const images = [
    {
      url: "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749867084/slider-image3_ozzhyb.webp",
      //   title: "Welcome Sony Collection",
      //   descriptions: "A New Online Shop Experince",
    },
    // {
    // url: "/image/sliderimage/1743513286313_7MRY1GHPD7_2025-04-01_1.jpg",
    // title: "2025 Latest Style",
    // description: ["Trending Men's", "Collection"],
    // },
    // {
    // url: "/image/sliderimage/1743513286313_7MRY1GHPD7_2025-04-01_1.jpg",
    //   title: "Image 3",
    //   description: "This is the description for image 3",
    // },
  ];

  const products = {
    newArrivals: [
      {
        id: 1,
        name: "New Jacket",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865427/pexels-shootsaga-30809730_nrurvm.webp",
        price: "$25",
      },
      {
        id: 2,
        name: "New Shirt",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865428/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy3_p8wvbi.webp",
        price: "$30",
      },
      {
        id: 3,
        name: "New Pants",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "$28",
      },
      {
        id: 4,
        name: "New Shoes",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808440/pexels-mk-1182794846-22431192_xp4umg.webp",
        price: "$40",
      },
      {
        id: 5,
        name: "New Jacket",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "$25",
      },
      {
        id: 6,
        name: "New Shirt",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "$30",
      },
      {
        id: 7,
        name: "New Pants",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "$28",
      },
      {
        id: 8,
        name: "New Shoes",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        price: "$40",
      },
    ],
    bestSellers: [
      {
        id: 9,
        name: "Best Hoodie",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808445/pexels-mk-1182794846-22064227_xmiygk.webp",
        price: "$32",
      },
      {
        id: 10,
        name: "Top Jacket",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-neha-mishra-1851906907-28512776_dz74dx.webp",
        price: "$35",
      },
      {
        id: 11,
        name: "Best Jeans",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/71lSQmEASkL._AC_UY1100__lyfpf7.jpg",
        price: "$29",
      },
      {
        id: 12,
        name: "Best Shoes",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/71lSQmEASkL._AC_UY1100__lyfpf7.jpg",
        price: "$50",
      },
    ],
    saleItems: [
      {
        id: 13,
        name: "Sale Cap",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$10",
      },
      {
        id: 14,
        name: "Discount Jacket",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$18",
      },
      {
        id: 15,
        name: "Sale T-Shirt",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$12",
      },
      {
        id: 16,
        name: "Clearance Shoes",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        price: "$22",
      },
    ],
  };

  // Detect screen size
  const updateLayout = () => {
    const width = window.innerWidth;
    if (width <= 764) setItemsPerRow(2);
    else if (width <= 1026) setItemsPerRow(3);
    else setItemsPerRow(4);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Dynamic chunking
  const chunkedProducts = products[selectedCategory].reduce(
    (rows, product, index, array) => {
      if (index % itemsPerRow === 0) {
        rows.push(array.slice(index, index + itemsPerRow));
      }
      return rows;
    },
    []
  );

  return (
    <>
      <div className="main_homepage">
        <div className="swiper_icon_combind">
          <div>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="main_text_container">
                    <div className="text_overlay">
                      {/* <p className="title_text">{image.title}</p>
                      <p className="desc_text"> */}
                      {/* {image.description[0]}
                        <br />
                        {image.description[1]}
                      </p> */}
                      {/* <p className="desc2">{image.descriptions}</p> */}
                    </div>
                    <img src={image.url} alt="" className="banner_image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* icon section  start*/}
          <div className="help_section">
            <div className="two_item">
              <div className="shiping_icon">
                <img src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1749828205/support-1_ldwnaf.png"></img>
                <div>
                  <p className="main_text">Free Shipping</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
              <div className="shiping_icon">
                <img src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1749828205/support-2_j4mfpr.png"></img>
                <div>
                  <p className="main_text">Support 24/7</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
            </div>
            <div className="two_item">
              <div className="shiping_icon">
                <img src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1749828205/support-3_gycaef.png"></img>
                <div>
                  <p className="main_text">Noney Return</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
              <div className="shiping_icon">
                <img src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1749828205/support-4_xdauto.png"></img>
                <div className="main_text">
                  <p className="main_text">Order Discount</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* icon section  end*/}
        {/* daily deals start */}
        <div className="deals">
          <p>DAILY DEALS!</p>
        </div>

        <div className="product_section">
          <div
            className={`nav_item ${
              selectedCategory === "newArrivals" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("newArrivals")}
          >
            <a className="nav_items">New Arrivals</a>
          </div>
          <div className="two_item_section">
            <div
              className={`nav_item ${
                selectedCategory === "bestSellers" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("bestSellers")}
            >
              <a className="nav_items">Best Sellers</a>
            </div>
            <div
              className={`nav_item ${
                selectedCategory === "saleItems" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("saleItems")}
            >
              <a className="nav_items">Sale Items</a>
            </div>
          </div>
        </div>
        {/* product heading section end */}
        {/* product image section  start*/}
        <div>
          <div>
            {/* <div className="main_image_section">
              {products[selectedCategory]
                .reduce((rows, product, index, array) => {
                  if (index % 4 === 0) {
                    rows.push(array.slice(index, index + 4));
                  }
                  return rows;
                }, [])
                .map((pair, rowIndex) => (
                  <div className="combind_two_image" key={rowIndex}>
                    {pair.map((product) => (
                      <div className="product_image_section" key={product.id}>
                        <div className="image_container">
                          <img src={product.image} alt={product.name} />
                          <div className="overlay_buttons">
                            <button
                              className="like_btn"
                              onClick={() => handleLike(product.id)}
                            >
                              {likedItems[product.id] ? (
                                <IoHeartSharp className="text-red-500 text-2xl" />
                              ) : (
                                <IoHeartOutline className="text-2xl text-gray-800" />
                              )}
                            </button>
                            <button className="buy_now_btn">Buy Now</button>
                            <button
                              className="view_btn"
                              onClick={() => handleView(product.id)}
                            >
                              <IoEyeOutline className="text-2xl text-gray-800" />
                            </button>
                          </div>
                        </div>
                        <div className="product_text_section">
                          <h3>{product.name}</h3>
                          <div className="product_rating">
                            <IoStarOutline />
                            <IoStarOutline />
                            <IoStarOutline />
                            <IoStarOutline />
                            <IoStarOutline />
                          </div>
                          <div className="product_price">
                            <p>{product.price}</p>
                            <span>{product.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div> */}
            <div className="main_image_section">
              {chunkedProducts.map((group, rowIndex) => (
                <div className="combind_two_image" key={rowIndex}>
                  {group.map((product) => (
                    <div className="product_image_section" key={product.id}>
                      <div className="image_container">
                        <img src={product.image} alt={product.name} />
                        <div className="overlay_buttons">
                          <button
                            className="like_btn"
                            onClick={() => handleLike(product.id)}
                          >
                            {likedItems[product.id] ? (
                              <IoHeartSharp className="text-red-500 " />
                            ) : (
                              <IoHeartOutline className="like_btn" />
                            )}
                          </button>
                          <button className="buy_now_btn">Buy Now</button>
                          <button
                            className="view_btn"
                            onClick={() => handleView(product.id)}
                          >
                            <IoEyeOutline className="view_btn" />
                          </button>
                        </div>
                      </div>
                      <div className="product_text_section">
                        <h3>{product.name}</h3>
                        <div className="product_rating">
                          <IoStarOutline />
                          <IoStarOutline />
                          <IoStarOutline />
                          <IoStarOutline />
                          <IoStarOutline />
                        </div>
                        <div className="product_price">
                          <p>{product.price}</p>
                          <span>{product.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* image section part two */}

          {/* image section part two  end*/}
        </div>
        {/* product image section  start*/}
      </div>
    </>
  );
};

export default HomeSlider;
