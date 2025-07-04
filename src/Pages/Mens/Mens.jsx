import { useEffect, useState } from "react";
import "./Mens.scss";
import axios from "axios";

const Mens = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filteredVisible, setFilteredVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [data, setData] = useState([]);

  // filter karege type ke anusar se uske liye ye hai
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  // const [selectedSizes, setSelectedSizes] = useState([]);
  // const [selectedColors, setSelectedColors] = useState([]);

  const API = "https://fakestoreapi.com/products/category/women's clothing";

  const getProductData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

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

  // ye price range hai
  const priceRanges = [
    { label: "₹0 - ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000+", min: 1000, max: Infinity },
  ];

  const filterByPrice = (price) => {
    if (selectedPrices.length === 0) return true;
    return selectedPrices.some((label) => {
      const range = priceRanges.find((r) => r.label === label);
      return price >= range.min && price < range.max;
    });
  };

  const filterByType = (title) => {
    if (selectedTypes.length === 0) return true;
    return selectedTypes.some((type) =>
      title.toLowerCase().includes(type.toLowerCase())
    );
  };

  const filterBySize = () => {
    return true;
  };

  const filterByColor = () => {
    return true;
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
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524927/bblobmsjbxnkphukd0mx_375x350_crop_center_x4cdcl.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
              </div>
              <div className="boys-categoury-image-section">
                <img
                  className="boys-iamge-circle"
                  src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1751524928/myfuhyrk9pb2ww11tb9w_770x700_crop_center_kfwcqw.webp"
                />
                <p>Shirt</p>
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
                      Product Type {openDropdown === "productType" ? "▲" : "▼"}
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
                            checked={selectedTypes.includes("Shirt")}
                            onChange={() =>
                              setSelectedTypes((prev) =>
                                prev.includes("Shirt")
                                  ? prev.filter((t) => t !== "Shirt")
                                  : [...prev, "Shirt"]
                              )
                            }
                          />
                          Pants
                        </label>

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
            {data
              .filter(
                (item) =>
                  filterByPrice(item.price) &&
                  filterByType(item.title) &&
                  filterBySize(item) &&
                  filterByColor(item)
              )
              .map((item) => (
                <div className="product-card" key={item.id}>
                  <div className="image-section-all-product">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="product-main-image"
                    />
                  </div>
                  <div className="product-all-text">
                    <p className="product-title-mens">{item.title}</p>
                    <p className="product-price-mens">₹{item.price}</p>
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
