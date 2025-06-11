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
import { useState } from "react";

const HomeSlider = () => {
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
      url: "/image/sliderimage/slider-image3.jpeg",
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
        image: "/image/homepage/pexels-shootsaga-30809730.webp",
        price: "$25",
      },
      {
        id: 2,
        name: "New Shirt",
        image: "/image/homepage/pexels-dhanno-20702673.webp",
        price: "$30",
      },
      {
        id: 3,
        name: "New Pants",
        image: "/image/homepage/pexels-dhanno-20702676.webp",
        price: "$28",
      },
      {
        id: 4,
        name: "New Shoes",
        image: "/image/homepage/pexels-mk-1182794846-22431192.webp",
        price: "$40",
      },
      {
        id: 5,
        name: "New Jacket",
        image: "/image/homepage/pexels-shootsaga-30809730.webp",
        price: "$25",
      },
      {
        id: 6,
        name: "New Shirt",
        image: "/image/homepage/pexels-dhanno-20702673.webp",
        price: "$30",
      },
      {
        id: 7,
        name: "New Pants",
        image: "/image/homepage/pexels-dhanno-20702676.webp",
        price: "$28",
      },
      {
        id: 8,
        name: "New Shoes",
        image: "/image/homepage/pexels-mk-1182794846-22431192.webp",
        price: "$40",
      },
    ],
    bestSellers: [
      {
        id: 9,
        name: "Best Hoodie",
        image: "/image/homepage/pexels-mk-1182794846-22431192.webp",
        price: "$32",
      },
      {
        id: 10,
        name: "Top Jacket",
        image: "/image/homepage/71lSQmEASkL._AC_UY1100_.jpg",
        price: "$35",
      },
      {
        id: 11,
        name: "Best Jeans",
        image: "/image/homepage/71lSQmEASkL._AC_UY1100_.jpg",
        price: "$29",
      },
      {
        id: 12,
        name: "Best Shoes",
        image: "/image/homepage/71lSQmEASkL._AC_UY1100_.jpg",
        price: "$50",
      },
    ],
    saleItems: [
      {
        id: 13,
        name: "Sale Cap",
        image: "/image/homepage/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D.jpg",
        price: "$10",
      },
      {
        id: 14,
        name: "Discount Jacket",
        image: "/image/homepage/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D.jpg",
        price: "$18",
      },
      {
        id: 15,
        name: "Sale T-Shirt",
        image: "/image/homepage/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D.jpg",
        price: "$12",
      },
      {
        id: 16,
        name: "Clearance Shoes",
        image: "/image/homepage/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D.jpg",
        price: "$22",
      },
    ],
  };

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
                <img src="\image\icon\support-1.png"></img>
                <div>
                  <p className="main_text">Free Shipping</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
              <div className="shiping_icon">
                <img src="\image\icon\support-2.png"></img>
                <div>
                  <p className="main_text">Support 24/7</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
            </div>
            <div className="two_item">
              <div className="shiping_icon">
                <img src="\image\icon\support-3.png"></img>
                <div>
                  <p className="main_text">Noney Return</p>
                  <span className="sub_text">Free shiping on all order</span>
                </div>
              </div>
              <div className="shiping_icon">
                <img src="\image\icon\support-4.png"></img>
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
        {/* daily deals end */}
        {/* product heading section start */}
        {/* <div className="product_section">
          <div className="nav_item">
            <a className="nav_items">New Arrivals</a>
          </div>
          <div className="two_item_section">
            <div className="nav_item">
              <a className="nav_items">Best Sellers</a>
            </div>
            <div className="nav_item">
              <a className="nav_items">Sale Items</a>
            </div>
          </div>
        </div> */}
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
          {/* <div className="main_image_section">
            <div className="combind_two_image">
              <div className="product_image_section">
                <div className="image_container">
                  <img
                    src="\image\homepage\pexels-shootsaga-30809730.webp"
                    alt="Product"
                  />
                  <div className="overlay_buttons">
                    <button className="like_btn" onClick={handleLike}>
                      {liked ? <IoHeartSharp /> : <IoHeartOutline />}
                    </button>
                    <button className="buy_now_btn">Buy Now</button>
                    <button className="view_btn" onClick={handleView}>
                      <IoEyeOutline />
                    </button>
                  </div>
                </div>
                <div className="product_text_section">
                  <h3>LStormLine Insulated Jacket</h3>
                  <div className="product_rating">
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>
                  <div className="product_price">
                    <p>$20</p>
                    <span>$20</span>
                  </div>
                </div>
              </div>

              <div className="product_image_section">
                <div className="image_container">
                  <img
                    src="\image\homepage\pexels-shootsaga-30809730.webp"
                    alt="Product"
                  />
                  <div className="overlay_buttons">
                    <button className="like_btn" onClick={handleLike}>
                      {liked ? <IoHeartSharp /> : <IoHeartOutline />}
                    </button>
                    <button className="buy_now_btn">Buy Now</button>
                    <button className="view_btn" onClick={handleView}>
                      <IoEyeOutline />
                    </button>
                  </div>
                </div>
                <div className="product_text_section">
                  <h3>LStormLine Insulated Jacket</h3>
                  <div className="product_rating">
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>
                  <div className="product_price">
                    <p>$20</p>
                    <span>$20</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="combind_two_image">
              <div className="product_image_section">
                <div className="image_container">
                  <img
                    src="\image\homepage\pexels-shootsaga-30809730.webp"
                    alt="Product"
                  />
                  <div className="overlay_buttons">
                    <button className="like_btn" onClick={handleLike}>
                      {liked ? <IoHeartSharp /> : <IoHeartOutline />}
                    </button>
                    <button className="buy_now_btn">Buy Now</button>
                    <button className="view_btn" onClick={handleView}>
                      <IoEyeOutline />
                    </button>
                  </div>
                </div>
                <div className="product_text_section">
                  <h3>LStormLine Insulated Jacket</h3>
                  <div className="product_rating">
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>
                  <div className="product_price">
                    <p>$20</p>
                    <span>$20</span>
                  </div>
                </div>
              </div>

              <div className="product_image_section">
                <div className="image_container">
                  <img
                    src="\image\homepage\pexels-neha-mishra-1851906907-28512776.webp"
                    alt="Product"
                  />
                  <div className="overlay_buttons">
                    <button className="like_btn" onClick={handleLike}>
                      {liked ? <IoHeartSharp /> : <IoHeartOutline />}
                    </button>
                    <button className="buy_now_btn">Buy Now</button>
                    <button className="view_btn" onClick={handleView}>
                      <IoEyeOutline />
                    </button>
                  </div>
                </div>
                <div className="product_text_section">
                  <h3>LStormLine Insulated Jacket</h3>
                  <div className="product_rating">
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>
                  <div className="product_price">
                    <p>$20</p>
                    <span>$20</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div>
            <div className="main_image_section">
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
                                <IoHeartOutline className="text-2xl text-black" />
                              )}
                            </button>
                            <button className="buy_now_btn">Buy Now</button>
                            <button
                              className="view_btn"
                              onClick={() => handleView(product.id)}
                            >
                              <IoEyeOutline className="text-2xl text-black" />
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
