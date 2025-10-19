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
  const [selectedSize, setSelectedSize] = useState([]);

  // ye redux
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
        span: "800",
        inStock: true,
        type: "T-Shirt",
        size: ["S"],
        discount: 20,
      },
      {
        id: 2,
        name: "Floral Print A-Line Kurti",
        title: "Rayon A-Line Kurti with Floral Pattern and 3/4 Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1760718296/photo-1611312449412-6cefac5dc3e4_kzbgvv.avif",
        span: "700",
        inStock: false,
        type: "Shirt",
        size: ["M"],
        discount: 20,
      },
      {
        id: 3,
        name: "Classic Printed Cotton Kurti",
        title: "Ethnic Straight Kurti with Block Print Design",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031848/MFL00019MOUNTAIN_1_rlzvpz.webp",
        span: "600",
        type: "Jeanse",
        size: ["L"],
        discount: 20,
      },
      {
        id: 4,
        name: "Elegant Kurti with Embroidery",
        title: "Designer Kurti with Intricate Thread Work",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031848/MFL00019MOUNTAIN_1_rlzvpz.webp",
        span: "800",
        type: "Jeanse",
        size: ["XL"],
        discount: 20,
      },
      {
        id: 5,
        name: "Block Print Cotton Kurti",
        title: "Women’s Casual Block Print Straight Kurti",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1760718295/photo-1525507119028-ed4c629a60a3_iampp5.avif",
        span: "750",
        type: "Shirt",
        size: ["L"],
        discount: 30,
      },
      {
        id: 6,
        name: "Comfort Fit Rayon Kurti",
        title: "Lightweight Rayon Kurti for Daily Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031848/MFL00019MOUNTAIN_1_rlzvpz.webp",
        span: "900",
        type: "Jeanse",
        size: ["L"],
        discount: 35,
      },
      {
        id: 7,
        name: "Elegant Printed Kurti",
        title: "Stylish Kurti with Allover Print & Button Detailing",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1760719642/photo-1611312449408-fcece27cdbb7_vqotgj.avif",
        span: "700",
        type: "Jeanse",
        size: ["XL"],
        discount: 20,
      },
      {
        id: 8,
        name: "Traditional Cotton Kurti",
        title: "Classic Cotton Kurti with Embroidered Yoke",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031871/SMLW00004DRYGRASS_1_ff03ed69-2678-4728-a04c-c336e9a2d4e4_x0dnkp.webp",
        span: "600",
        type: "Jeanse",
        size: ["M"],
        discount: 20,
      },
    ],
    tshirt: [
      {
        id: 9,
        name: "Winter Velvet Kurti",
        title: "Women’s Velvet Kurti with Full Sleeves",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1756031875/MSK00130ASPENGREEN_1_rffuop.webp",
        span: "800",
        type: "Shirt",
        size: ["L"],
        discount: 20,
      },
      {
        id: 10,
        name: "Festive Embroidered Kurti",
        title: "Embroidered Anarkali Kurti for Festive Occasions",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "1200",
        type: "T-Shirt",
        size: ["M"],
        discount: 20,
      },
      {
        id: 11,
        name: "Denim Style Kurti",
        title: "Trendy Denim Kurti with Button Front",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "1500",
        type: "Jeanse",
        size: ["L"],
        discount: 30,
      },
      {
        id: 12,
        name: "Elegant Print Kurti",
        title: "Casual Printed Kurti with Straight Fit",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "750",
        type: "Jeanse",
        size: ["M"],
        discount: 20,
      },
    ],
    jeanse: [
      {
        id: 13,
        name: "Simple Cotton Kurti",
        title: "Basic Cotton Kurti for Everyday Wear",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "900",
        type: "Jeanse",
        size: ["S"],
        discount: 20,
      },
      {
        id: 14,
        name: "Water-Resistant Kurti",
        title: "Kurti with Water-Repellent Finish for Outdoor Use",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "1000",
        type: "Jeanse",
        size: ["L"],
        discount: 20,
      },
      {
        id: 15,
        name: "Graphic Printed Kurti",
        title: "Modern Kurti with Stylish Graphic Prints",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "1200",
        type: "Jeanse",
        size: ["L"],
        discount: 20,
      },
      {
        id: 16,
        name: "Comfort Fit Cotton Kurti",
        title: "Breathable Cotton Kurti for Casual Days",
        image:
          "https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp",
        span: "750",
        type: "Jeanse",
        size: ["M"],
        discount: 15,
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
    { label: "₹0 - ₹300", min: 0, max: 300 },
    { label: "₹400 - ₹600", min: 400, max: 600 },
    { label: "₹700 - ₹1000", min: 700, max: 1000 },
    { label: "₹1000+", min: 1000, max: Infinity },
  ];

  // ham catagari ke function start kar rahe hai
  const handleBoysCatagory = (boyscatogory) => {
    setSelectedCategory(boyscatogory.toLowerCase());
    setSelectedTypes([]);
    setSelectedPrices([]);
    setSelectedSize([]);
  };

  //  Catagery section
  const categoryProducts =
    selectedCategory == "all"
      ? allMensproduct
      : AllmensClothes[selectedCategory] || [];

  // filtered product list with type + price filters combined kar rahe hai
  const finalFilteredProducts = categoryProducts.filter((product) => {
    const numericPrice = parseInt(product.span.replace(/[₹,]/g, ""));

    // Type Filter
    if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
      return false;
    }

    // Price Filter
    if (
      selectedPrices.length > 0 &&
      !selectedPrices.some((rangeLabel) => {
        const range = priceRanges.find((r) => r.label === rangeLabel);
        return range && numericPrice >= range.min && numericPrice <= range.max;
      })
    ) {
      return false;
    }

    // size filter
    if (
      selectedSize.length > 0 &&
      (!product.size ||
        !selectedSize.some((size) => product.size.includes(size)))
    ) {
      return false;
    }
    return true;
  });

  // discount function
  const calculateDiscountedPrice = (span, discount) => {
    if (!span || !discount) return span;
    const numericPrice = parseInt(span.replace(/[₹,]/g, ""));
    return Math.floor(numericPrice - (numericPrice * discount) / 100);
  };

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
                      Size {openDropdown === "size" ? "▼" : "▲"}
                    </p>
                    {openDropdown === "size" && (
                      <div className="dropdown-content-men">
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedSize.includes("S")}
                            onChange={() =>
                              setSelectedSize((prev) =>
                                prev.includes("S")
                                  ? prev.filter((s) => s !== "S")
                                  : [...prev, "S"]
                              )
                            }
                          />
                          S
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedSize.includes("M")}
                            onChange={() =>
                              setSelectedSize((prev) =>
                                prev.includes("M")
                                  ? prev.filter((m) => m !== "M")
                                  : [...prev, "M"]
                              )
                            }
                          />{" "}
                          M
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedSize.includes("L")}
                            onChange={() =>
                              setSelectedSize((prev) =>
                                prev.includes("L")
                                  ? prev.filter((l) => l !== "L")
                                  : [...prev, "L"]
                              )
                            }
                          />{" "}
                          L
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedSize.includes("XL")}
                            onChange={() =>
                              setSelectedSize((prev) =>
                                prev.includes("XL")
                                  ? prev.filter((xl) => xl !== "XL")
                                  : [...prev, "XL"]
                              )
                            }
                          />{" "}
                          XL
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
                      Colour/Variant {openDropdown === "color" ? "▼" : "▲"}
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
                      Price Range {openDropdown === "price" ? "▼" : "▲"}
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
            {finalFilteredProducts.map((AllmensClothes) => (
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
                {/* <div className="combine-price-or-span">
                  <p className="price-product-mens">{AllmensClothes.price}</p>
                  <p className="span-price-mens">{AllmensClothes.span}</p>
                </div> */}
                <div className="combine-price-or-span">
                  <p>
                    ₹
                    {calculateDiscountedPrice(
                      AllmensClothes.span,
                      AllmensClothes.discount
                    )}
                  </p>
                  <p className="men-main-price">₹{AllmensClothes.span}</p>
                  <p className="men-discount-price">
                    {" "}
                    {AllmensClothes.discount}% off
                  </p>
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
