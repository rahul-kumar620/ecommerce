// import React from "react";
import "./HomeSlider.scss";
import "./HomeSlider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

// new change start
// ✨ NEW IMPORT
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../Redux/slices/LikeSlice";

// new change end

// icon section

// import { IoStarOutline } from "react-icons/io5";
import { IoHeartOutline, IoHeartSharp, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HomeSlider = () => {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("newArrivals");

  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.liked);

  const navigate = useNavigate();

  // const handleLike = (section, product) => {
  //   const likeKey = `${section}-${product.id}`;
  //   // setLikedItems((prev) => ({ ...prev, [likeKey]: !prev[likeKey] }));
  //   setLikedItems((prev) => {
  //     const newLikes = { ...prev };

  //     if (newLikes[likeKey]) {
  //       delete newLikes[likeKey];
  //     } else {
  //       newLikes[likeKey] = product;
  //     }

  //     return newLikes;
  //   });
  // };

  //  new change redux start

  // 🆕 Redux se handle kare like/unlike
  const handleLike = (section, product) => {
    const likeKey = `${section}-${product.id}`;
    dispatch(toggleLike({ key: likeKey, product }));
  };

  // new change redux end
  const handleView = (product) => {
    navigate(`/Productdetails/${product.id}`, { state: { product } });
  };

  // const handleView = (id) => {
  //   navigate(`/Productdetails/${id}`);
  // };

  const images = [
    {
      url: "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749867084/slider-image3_ozzhyb.webp",
      //   title: "Welcome Sony Collection",
      //   descriptions: "A New Online Shop Experince",
    },
    {
      url: "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750093581/881852a6-808f-4d74-afb8-b39ff9e841d4_g1toql.jpg",
      // title: "2025 Latest Style",
      // description: ["Trending Men's", "Collection"],
    },
    {
      url: "https://res.cloudinary.com/dqprmy5ro/image/upload/v1757998325/Gemini_Generated_Image_4y0hsc4y0hsc4y0h_x1eqzs.png",
      //   title: "Image 3",
      //   description: "This is the description for image 3",
    },
  ];

  const products = {
    newArrivals: [
      {
        id: 1,
        name: "Elegant Straight Cotton Kurti",
        title: "Women’s Casual Straight Kurti with Side Slits",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865427/pexels-shootsaga-30809730_nrurvm.webp",
        // price: "500",
        span: "700",
        inStock: true,
        discount: 25,
      },
      {
        id: 2,
        name: "Floral Print A-Line Kurti",
        title: "Rayon A-Line Kurti with Floral Pattern and 3/4 Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865428/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy3_p8wvbi.webp",
        // price: "400",
        span: "600",
        inStock: false,
        discount: 30,
      },
      {
        id: 3,
        name: "Classic Printed Cotton Kurti",
        title: "Ethnic Straight Kurti with Block Print Design",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        // price: "600",
        span: "800",
        discount: 30,
      },
      {
        id: 4,
        name: "Elegant Kurti with Embroidery",
        title: "Designer Kurti with Intricate Thread Work",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808440/pexels-mk-1182794846-22431192_xp4umg.webp",
        // price: "1200",
        span: "1800",
        discount: 40,
      },
      {
        id: 5,
        name: "Block Print Cotton Kurti",
        title: "Women’s Casual Block Print Straight Kurti",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        // price: "600",
        span: "900",
        discount: 35,
      },
      {
        id: 6,
        name: "Comfort Fit Rayon Kurti",
        title: "Lightweight Rayon Kurti for Daily Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        // price: "800",
        span: "1000",
        discount: 30,
      },
      {
        id: 7,
        name: "Elegant Printed Kurti",
        title: "Stylish Kurti with Allover Print & Button Detailing",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        // price: "900",
        span: "1300",
        discount: 25,
      },
      {
        id: 8,
        name: "Traditional Cotton Kurti",
        title: "Classic Cotton Kurti with Embroidered Yoke",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
        // price: "650",
        span: "900",
        discount: 30,
      },
    ],
    bestSellers: [
      {
        id: 9,
        name: "Winter Velvet Kurti",
        title: "Women’s Velvet Kurti with Full Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808445/pexels-mk-1182794846-22064227_xmiygk.webp",
        span: "850",
        discount: 40,
      },
      {
        id: 10,
        name: "Festive Embroidered Kurti",
        title: "Embroidered Anarkali Kurti for Festive Occasions",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-neha-mishra-1851906907-28512776_dz74dx.webp",
        span: "3500",
        discount: 40,
      },
      {
        id: 11,
        name: "Denim Style Kurti",
        title: "Trendy Denim Kurti with Button Front",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/71lSQmEASkL._AC_UY1100__lyfpf7.jpg",
        span: "900",
        discount: 40,
      },
      {
        id: 12,
        name: "Elegant Print Kurti",
        title: "Casual Printed Kurti with Straight Fit",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/71lSQmEASkL._AC_UY1100__lyfpf7.jpg",
        span: "750",
        discount: 45,
      },
    ],
    saleItems: [
      {
        id: 13,
        name: "Simple Cotton Kurti",
        title: "Basic Cotton Kurti for Everyday Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808432/Ff9ArgIcmQjmu5vDq4LeUe3lT81uUu0DhrvhGg9D_al0lmb.webp",
        span: "850",
        discount: 45,
      },
      {
        id: 14,
        name: "Water-Resistant Kurti",
        title: "Kurti with Water-Repellent Finish for Outdoor Use",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750231528/jay-shree-4002-series-simar-saree-2227_yhvacr.webp",
        span: "999",
        discount: 20,
      },
      {
        id: 15,
        name: "Graphic Printed Kurti",
        title: "Modern Kurti with Stylish Graphic Prints",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750231527/fancy-cotton-desginer-shirt-496_bgcchx.jpg",
        span: "7000",
        discount: 20,
      },
      {
        id: 16,
        name: "Comfort Fit Cotton Kurti",
        title: "Breathable Cotton Kurti for Casual Days",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750231527/fancy-cotton-desginer-shirt-496_bgcchx.jpg",
        span: "1111",
        discount: 20,
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

  // discount function

  const calculateDiscountedPrice = (span, discount) => {
    if (!span || !discount) return span;
    return Math.floor(span - (span * discount) / 100);
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
                  <p className="main_text">Money Return</p>
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
                            onClick={() => handleLike("homeslider", product)}
                          >
                            {likedItems[`homeslider-${product.id}`] ? (
                              <IoHeartSharp className="text-red-500 " />
                            ) : (
                              <IoHeartOutline className="like_btn" />
                            )}
                          </button>
                          {/* <button className="buy_now_btn">Buy Now</button> */}
                          {product.inStock ? (
                            <button className="buy_now_btn-women in-stock">
                              In Stock
                            </button>
                          ) : (
                            <button
                              className="buy_now_btn-women out-of-stock"
                              disabled
                            >
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
                      <div className="product_text_section">
                        <h3>{product.name}</h3>
                        {/* <div className="product_rating">
                          <IoStarOutline />
                          <IoStarOutline />
                          <IoStarOutline />
                          <IoStarOutline />
                          <IoStarOutline />
                        </div> */}
                        <div className="product_price">
                          <p className="home-main-discount-price">
                            ₹
                            {calculateDiscountedPrice(
                              product.span,
                              product.discount
                            )}
                          </p>
                          <span className="home-main-price">
                            ₹{product.span}
                          </span>
                          <p className="home-discount-price">
                            {product.discount}% off
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* background image part alag section start*/}
          <div className="welcome-main-page">
            <div className="background-container">
              <img
                src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750751349/banner-71_rdl9dw.webp"
                alt="Background"
                className="background-image"
              />
              <div className="overlay-content">
                <img
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750751888/Add-a-heading-2-r36huorelvjcvcnh8j62zri8jnx9mmsu331rh4judk_rtzvhd.webp"
                  alt="Left Side Image"
                  className="left-image"
                />
                <div className="right-text">
                  <h2 className="right-side-header">
                    Welcome to Soni Collection
                  </h2>
                  <span className="right-side-sub-header">
                    A Curated Celebration of Grace and Glamour
                  </span>
                  <p className="right-side-all-text">
                    Where tradition meets contemporary style. Discover a new and
                    curated range of
                    <br /> sarees that blend the richness of Indian heritage
                    with the flair of modern
                    <br /> fashion. From luxurious silk drapes to vibrant
                    georgettes and intricately <br />
                    embroidered masterpieces, every piece in the Soni Collection
                    is crafted
                    <br /> for the modern woman who embraces tradition with
                    confidence and grace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* background image part alag section end*/}
        </div>
        <div>
          <h1>Testimonial</h1>
        </div>
        {/* product image section  start*/}
      </div>
    </>
  );
};

export default HomeSlider;
