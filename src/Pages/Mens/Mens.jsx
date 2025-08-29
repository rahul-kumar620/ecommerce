import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../Redux/slices/LikeSlice";

import "./Mens.scss";
import { IoEyeOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Mens = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filteredVisible, setFilteredVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("shirts");

  // filter karege type ke anusar se uske liye ye hai
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  // const [selectedSizes, setSelectedSizes] = useState([]);
  // const [selectedColors, setSelectedColors] = useState([]);

  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.liked);
  const navigate = useNavigate();

  // first hamko handle redux se karna hai
  const handleLike = (section, AllmensClothes) => {
    const likeKey = `${section}-${AllmensClothes.id}`;
    dispatch(toggleLike({ key: likeKey, product: AllmensClothes }));
  };

  const handleView = (product) => {
    navigate(`/Productdetails/${product.id}`, { state: { product } });
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setFilteredVisible(true);
      }
    };

    handleResize();
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

  //  product section
  const AllmensClothes = {
    shirts: [
      {
        id: 1,
        name: "Elegant Straight Cotton Kurti",
        title: "Women’s Casual Straight Kurti with Side Slits",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031739/EXCG00014CARBON_1_ciljac.webp",
        price: "₹500",
        span: "₹150",
        inStock: true,
        type: "T-Shirt",
      },
      {
        id: 2,
        name: "Floral Print A-Line Kurti",
        title: "Rayon A-Line Kurti with Floral Pattern and 3/4 Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031739/EXCG00014CARBON_1_ciljac.webp",
        price: "₹700",
        span: "₹250",
        inStock: false,
        type: "Shirt",
      },
      {
        id: 3,
        name: "Classic Printed Cotton Kurti",
        title: "Ethnic Straight Kurti with Block Print Design",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031848/MFL00019MOUNTAIN_1_rlzvpz.webp",
        price: "₹600",
        span: "₹350",
        type: "Jeanse",
      },
      {
        id: 4,
        name: "Elegant Kurti with Embroidery",
        title: "Designer Kurti with Intricate Thread Work",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031848/MFL00019MOUNTAIN_1_rlzvpz.webp",
        price: "₹700",
        span: "₹300",
      },
      {
        id: 5,
        name: "Block Print Cotton Kurti",
        title: "Women’s Casual Block Print Straight Kurti",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031866/SMCH00003EBONY_1_vuewpe.webp",
        price: "₹400",
        span: "₹350",
      },
      {
        id: 6,
        name: "Comfort Fit Rayon Kurti",
        title: "Lightweight Rayon Kurti for Daily Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031848/MFL00019MOUNTAIN_1_rlzvpz.webp",
        price: "₹600",
        span: "₹500",
      },
      {
        id: 7,
        name: "Elegant Printed Kurti",
        title: "Stylish Kurti with Allover Print & Button Detailing",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031868/SMLW00002BEIGE_1_lavn27.webp",
        price: "₹500",
        span: "₹400",
      },
      {
        id: 8,
        name: "Traditional Cotton Kurti",
        title: "Classic Cotton Kurti with Embroidered Yoke",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031871/SMLW00004DRYGRASS_1_ff03ed69-2678-4728-a04c-c336e9a2d4e4_x0dnkp.webp",
        price: "₹600",
        span: "₹400",
      },
    ],
    tshirt: [
      {
        id: 9,
        name: "Winter Velvet Kurti",
        title: "Women’s Velvet Kurti with Full Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031875/MSK00130ASPENGREEN_1_rffuop.webp",
        price: "₹500",
        span: "₹400",
      },
      {
        id: 10,
        name: "Festive Embroidered Kurti",
        title: "Embroidered Anarkali Kurti for Festive Occasions",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹500",
        span: "₹400",
      },
      {
        id: 11,
        name: "Denim Style Kurti",
        title: "Trendy Denim Kurti with Button Front",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹600",
        span: "₹400",
      },
      {
        id: 12,
        name: "Elegant Print Kurti",
        title: "Casual Printed Kurti with Straight Fit",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹500",
        span: "₹450",
      },
    ],
    jeanse: [
      {
        id: 13,
        name: "Simple Cotton Kurti",
        title: "Basic Cotton Kurti for Everyday Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹1000",
        span: "₹900",
      },
      {
        id: 14,
        name: "Water-Resistant Kurti",
        title: "Kurti with Water-Repellent Finish for Outdoor Use",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹1100",
        span: "₹1000",
      },
      {
        id: 15,
        name: "Graphic Printed Kurti",
        title: "Modern Kurti with Stylish Graphic Prints",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹1300",
        span: "₹1200",
      },
      {
        id: 16,
        name: "Comfort Fit Cotton Kurti",
        title: "Breathable Cotton Kurti for Casual Days",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        price: "₹900",
        span: "₹750",
      },
    ],
  };

  const allMensproduct = [
    ...AllmensClothes.shirts,
    ...AllmensClothes.tshirt,
    ...AllmensClothes.jeanse,
  ];

  // ye price range hai
  const priceRanges = [
    { label: "₹0 - ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000+", min: 1000, max: Infinity },
  ];

  // ham catagari ke function start kar rahe hai

  const handleBoysCatagory = (boyscatogory) => {
    setSelectedCategory(boyscatogory.toLowerCase());
  };

  //  Catagery section

  const categoryProducts =
    selectedCategory == "all"
      ? allMensproduct
      : AllmensClothes[selectedCategory] || [];

  // ab ham filter karenge jaise ki shirt tshirt ke liye
  const typedFilteredProducts = categoryProducts.filter((product) => {
    if (selectedTypes.length === 0) return true;
    return selectedTypes.includes(product.type);
  });

  return (
    <>
      <div className="main-mans-section">
        <div>
          <div className="header-mans">
            <h1 className="mens-heading">Mens</h1>
          </div>
          <div className="boys-all-category">
            <p className="categoury-text">Shop by Category</p>
            <div className="categoury-all-boys">
              <div
                className="boys-categoury-image-section"
                onClick={() => handleBoysCatagory("shirts")}
              >
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp"
                />
                <p>MENS</p>
              </div>
              <div
                className="boys-categoury-image-section"
                onClick={() => handleBoysCatagory("tshirt")}
              >
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>BOYS</p>
              </div>
              <div
                className="boys-categoury-image-section"
                onClick={() => handleBoysCatagory("jeanse")}
              >
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>KIDS</p>
              </div>
            </div>
          </div>
          {/* filter section started */}
          <div className="filter-section-men">
            <div className="left-filter-side-men">
              {/* Filtered By Label (Clickable on mobile) */}
              <p className="left-side-text-men" onClick={handleFilteredByClick}>
                Filtered By:
              </p>

              {filteredVisible && (
                <>
                  {/* Product Type */}
                  <div className="dropdown-men">
                    <p
                      className="left-side-texts-men"
                      onClick={() => toggleDropdown("productType")}
                    >
                      Product Type {openDropdown === "productType" ? "▼" : "▲"}
                    </p>
                    {openDropdown === "productType" && (
                      <div className="dropdown-content-men open">
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes("Shirt")}
                            onChange={() =>
                              setSelectedTypes((prev) =>
                                prev.includes("Shirt")
                                  ? prev.filter((t) => t !== "Shirt")
                                  : [...prev, "Shirt"]
                              )
                            }
                          />
                          Shirt
                        </label>

                        <label>
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes("T-Shirt")}
                            onChange={() =>
                              setSelectedTypes((prev) =>
                                prev.includes("T-Shirt")
                                  ? prev.filter((t) => t !== "T-Shirt")
                                  : [...prev, "T-Shirt"]
                              )
                            }
                          />
                          T-Shirts
                        </label>

                        <label>
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes("Jeanse")}
                            onChange={() =>
                              setSelectedTypes((prev) =>
                                prev.includes("Jeanse")
                                  ? prev.filter((t) => t !== "Jeanse")
                                  : [...prev, "Jeanse"]
                              )
                            }
                          />
                          Jeans
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Size */}
                  <div className="dropdown-men">
                    <p
                      className="left-side-texts-men"
                      onClick={() => toggleDropdown("size")}
                    >
                      Size {openDropdown === "size" ? "▲" : "▼"}
                    </p>
                    {openDropdown === "size" && (
                      <div className="dropdown-content-men">
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
                  <div className="dropdown-men">
                    <p
                      className="left-side-texts-men"
                      onClick={() => toggleDropdown("color")}
                    >
                      Colour/Variant {openDropdown === "color" ? "▲" : "▼"}
                    </p>
                    {openDropdown === "color" && (
                      <div className="dropdown-content-men open">
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
                  <div className="dropdown-men">
                    <p
                      className="left-side-texts-men"
                      onClick={() => toggleDropdown("price")}
                    >
                      Price Range {openDropdown === "price" ? "▲" : "▼"}
                    </p>
                    {openDropdown === "price" && (
                      <div className="dropdown-content-men open">
                        {priceRanges.map((range) => (
                          <label key={range.label}>
                            <input
                              type="checkbox"
                              checked={selectedPrices.includes(range.label)}
                              onChange={() =>
                                setSelectedPrices((prev) =>
                                  prev.includes(range.label)
                                    ? prev.filter((p) => p !== range.label)
                                    : [...prev, range.label]
                                )
                              }
                            />
                            {range.label}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="right-side-sorted-men">
              <button className="right-side-sorteds-men">
                <span>Sorted by</span>
                <p>Popularity</p>
              </button>
            </div>
          </div>
          {/* filter section end*/}
          {/* product image section */}
          <div className="all-product-image-section">
            {typedFilteredProducts.map((AllmensClothes) => (
              <div key={AllmensClothes.id} className="all-content-mens-section">
                <div className="image-main-mens-container">
                  <img
                    src={AllmensClothes.image}
                    alt={AllmensClothes.name}
                    className="product-image"
                  />
                  <div className="overlay_buttons-mens">
                    <button
                      className="like_btn-mens"
                      onClick={() => handleLike("mens", AllmensClothes)}
                    >
                      {likedItems[`mens-${AllmensClothes.id}`] ? (
                        <IoHeartSharp className="text-red-500 " />
                      ) : (
                        <IoHeartOutline className="like_btn-mens" />
                      )}
                    </button>
                    {/* <button className="buy_now_btn-women">Buy Now</button> */}
                    {AllmensClothes.inStock ? (
                      <button className="buy_now_btn in-stock">In Stock</button>
                    ) : (
                      <button className="buy_now_btn out-of-stock">
                        Out of Stock
                      </button>
                    )}
                    <button
                      className="view_btn-mens"
                      onClick={() => handleView(AllmensClothes)}
                    >
                      <IoEyeOutline className="view_btn-mens" />
                    </button>
                  </div>
                </div>
                <h3 className="product-boys-name">{AllmensClothes.name}</h3>
                <div className="combine-price-or-span">
                  <p className="price-product-mens">{AllmensClothes.price}</p>
                  <p className="span-price-mens">{AllmensClothes.span}</p>
                </div>
              </div>
            ))}
          </div>

          {/* product image section end */}
        </div>
      </div>
    </>
  );
};

export default Mens;
