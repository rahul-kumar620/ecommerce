import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/autoplay";

// new change start
// ✨ NEW IMPORT
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../Redux/slices/LikeSlice";

// new change end

//  scss
import "./Womens.scss";
import { useEffect, useState } from "react";
import { IoEyeOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Womens = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filteredVisible, setFilteredVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("banarshi");

  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.liked);

  const navigate = useNavigate();
  //  new change redux start
  //Redux se handle kare like/unlike
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

  // filter code likhe toggle ke liye
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setFilteredVisible(true); // Desktop: filters always visible
      }
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilteredByClick = () => {
    if (isMobile) {
      setFilteredVisible(!filteredVisible);
      setOpenDropdown(null); // reset dropdown
    }
  };

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  //  catagari section
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const imagess = [
    {
      url: "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914349/saree_banner_02_j4cnn3.webp",
    },
  ];

  const products = {
    banarshi: [
      {
        id: 1,
        name: "Elegant Straight Cotton Kurti",
        title: "Women’s Casual Straight Kurti with Side Slits",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914458/ram-rasiya-vishwamitra-saree-wholesale-catalog-0-2024-01-24_12_13_42_ohyflg.jpg",
        price: "1600",
        span: "1100",
        inStock: true,
      },
      {
        id: 2,
        name: "Floral Print A-Line Kurti",
        title: "Rayon A-Line Kurti with Floral Pattern and 3/4 Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914362/rr-vayuputra-1-images-10_trwwcm.jpg",
        price: "1400",
        span: "1200",
        inStock: false,
      },
      {
        id: 3,
        name: "Classic Printed Cotton Kurti",
        title: "Ethnic Straight Kurti with Block Print Design",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914362/rr-vayuputra-1-images-10_trwwcm.jpg",
        price: "1200",
        span: "800",
        inStock: true,
      },
      {
        id: 4,
        name: "Elegant Kurti with Embroidery",
        title: "Designer Kurti with Intricate Thread Work",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914362/rr-vayuputra-1-images-10_trwwcm.jpg",
        price: "1300",
        span: "900",
      },
      {
        id: 5,
        name: "Block Print Cotton Kurti",
        title: "Women’s Casual Block Print Straight Kurti",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914362/rr-vayuputra-1-images-10_trwwcm.jpg",
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
        inStock: true,
      },
      {
        id: 8,
        name: "Traditional Cotton Kurti",
        title: "Classic Cotton Kurti with Embroidered Yoke",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914362/rr-vayuputra-1-images-10_trwwcm.jpg",
        price: "899",
        span: "999",
        inStock: true,
      },
    ],
    pathshala: [
      {
        id: 9,
        name: "Winter Velvet Kurti",
        title: "Women’s Velvet Kurti with Full Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750993694/52664-204_kcadnq.webp",
        price: "1650",
        span: "1300",
      },
      {
        id: 10,
        name: "Festive Embroidered Kurti",
        title: "Embroidered Anarkali Kurti for Festive Occasions",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750993694/52664-203_rwh1lc.webp",
        price: "$35",
      },
      {
        id: 11,
        name: "Denim Style Kurti",
        title: "Trendy Denim Kurti with Button Front",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750993694/52664-204_1_iy7zyg.webp",
        price: "$29",
      },
      {
        id: 12,
        name: "Elegant Print Kurti",
        title: "Casual Printed Kurti with Straight Fit",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1750993694/52664-209_pugk9q.webp",
        price: "$50",
      },
    ],
    ramrashiya: [
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
    ...products.banarshi,
    ...products.pathshala,
    ...products.ramrashiya,
  ];

  return (
    <div className="main-women-section">
      <div className="sub-women-section">
        <div>
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination]}
            className=""
          >
            {imagess.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <div className=""></div>
                  <img src={image.url} alt={`slide-${index}`} className="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="catagari-section">
          <div className="catagari-section-heading">
            <h1> CATEGORY</h1>
          </div>
          <div className="catagari-all-section">
            <div
              className="catagri-image-section"
              onClick={() => handleCategoryClick("banarshi")}
            >
              <img
                className="circle-img"
                src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914443/ram-rasiya-mor-chhadi-saree-wholesale-catalog-0-2024-01-19_12_16_09_aouzsc.jpg"
              />
              <p>BANARASI</p>
            </div>
            <div
              className="catagri-image-section"
              onClick={() => handleCategoryClick("pathshala")}
            >
              <img
                className="circle-img"
                src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914443/ram-rasiya-mor-chhadi-saree-wholesale-catalog-0-2024-01-19_12_16_09_aouzsc.jpg"
              />
              <p>PATHSHALA</p>
            </div>
            <div className="catagri-image-section">
              <img
                className="circle-img"
                src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914443/ram-rasiya-mor-chhadi-saree-wholesale-catalog-0-2024-01-19_12_16_09_aouzsc.jpg"
              />
              <p>RAJLAXMI</p>
            </div>
            <div
              className="catagri-image-section"
              onClick={() => handleCategoryClick("ramrashiya")}
            >
              <img
                className="circle-img"
                src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914443/ram-rasiya-mor-chhadi-saree-wholesale-catalog-0-2024-01-19_12_16_09_aouzsc.jpg"
              />
              <p>RAMRASHIYA</p>
            </div>
            <div className="catagri-image-section">
              <img
                className="circle-img"
                src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750914443/ram-rasiya-mor-chhadi-saree-wholesale-catalog-0-2024-01-19_12_16_09_aouzsc.jpg"
              />
              <p>WEEDING</p>
            </div>
          </div>
        </div>
        {/* Filter section start */}

        <div className="filter-section-women">
          <div className="left-filter-side-women">
            {/* Filtered By Label (Clickable on mobile) */}
            <p className="left-side-text-women" onClick={handleFilteredByClick}>
              Filtered By:
            </p>

            {filteredVisible && (
              <>
                {/* Product Type */}
                <div className="dropdown-women">
                  <p
                    className="left-side-texts-women"
                    onClick={() => toggleDropdown("productType")}
                  >
                    Product Type {openDropdown === "productType" ? "▲" : "▼"}
                  </p>
                  {openDropdown === "productType" && (
                    <div className="dropdown-content-women open">
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

                {/* Size */}
                <div className="dropdown-women">
                  <p
                    className="left-side-texts-women"
                    onClick={() => toggleDropdown("size")}
                  >
                    Size {openDropdown === "size" ? "▲" : "▼"}
                  </p>
                  {openDropdown === "size" && (
                    <div className="dropdown-content-women open">
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

                {/* Colour */}
                <div className="dropdown-women">
                  <p
                    className="left-side-texts-women"
                    onClick={() => toggleDropdown("color")}
                  >
                    Colour/Variant {openDropdown === "color" ? "▲" : "▼"}
                  </p>
                  {openDropdown === "color" && (
                    <div className="dropdown-content-women open">
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

                {/* Price */}
                <div className="dropdown-women">
                  <p
                    className="left-side-texts-women"
                    onClick={() => toggleDropdown("price")}
                  >
                    Price Range {openDropdown === "price" ? "▲" : "▼"}
                  </p>
                  {openDropdown === "price" && (
                    <div className="dropdown-content-women open">
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
              </>
            )}
          </div>

          <div className="right-side-sorted-women">
            <button className="right-side-sorteds-women">
              <span>Sorted by</span>
              <p>Popularity</p>
            </button>
          </div>
        </div>
        {/* Filter section End */}

        {/* image section start */}
        <div className="main-women-section-image">
          {(selectedCategory === "all"
            ? allProducts
            : products[selectedCategory] || []
          ).map((product) => (
            <div key={product.id} className="all-content-women-section">
              <div className="image-main-women-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="image-section-women"
                />
                <div className="overlay_buttons-women">
                  <button
                    className="like_btn-women"
                    onClick={() => handleLike("womens", product)}
                  >
                    {likedItems[`womens-${product.id}`] ? (
                      <IoHeartSharp className="text-red-500 " />
                    ) : (
                      <IoHeartOutline className="like_btn-women" />
                    )}
                  </button>
                  {/* <button className="buy_now_btn-women">Buy Now</button> */}
                  {product.inStock ? (
                    <button className="buy_now_btn in-stock">In Stock</button>
                  ) : (
                    <button className="buy_now_btn out-of-stock">
                      Out of Stock
                    </button>
                  )}
                  <button
                    className="view_btn-women"
                    onClick={() => handleView(product)}
                  >
                    <IoEyeOutline className="view_btn-women" />
                  </button>
                </div>
              </div>
              <div className="info-women">
                <p className="product-name-women">{product.name}</p>
              </div>
              <div className="pricing-women">
                <p className="product-price-women">&#8377;{product.price}</p>
                <p className="product-span-women strike-price ">
                  &#8377;{product.span}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* image section end */}
      </div>
    </div>
  );
};

export default Womens;
