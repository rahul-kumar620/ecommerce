import axios from "axios";
import "./Mens.scss";
import { useEffect, useState } from "react";

const Mens = () => {
  const [data, setData] = useState([]);
  const API = "https://fakestoreapi.com/products/category/men's clothing";

  const getMensData = async () => {
    try {
      const res = await axios.get(API);
      const originalData = res.data;
      const repeatedData = Array(5).fill(originalData).flat(); // 4 x 5 = 20 items
      setData(repeatedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMensData();
  }, []);
  return (
    <div className="mens-page">
      <h2 className="page-title">Buy Mens Collection Online</h2>

      <div className="main-content">
        <div className="filter-main-section">
          <div className="filters-panel">
            <h4>Filters</h4>
            <button className="reset-btn">Reset</button>
          </div>
        </div>
        <div className="product-area">
          <div className="p-7 pr-4">
            <div className="sort-bar">
              <div className="border border-gray-300">
                <label htmlFor="sort-select">Sort by</label>
                <select id="sort-select">
                  <option value="popularity">Popularity</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                  <option value="new">Newest First</option>
                </select>
              </div>
            </div>
          </div>

          <div className="main-product-section">
            {data.map((items) => (
              <div className="product-card" key={items.id}>
                <div className="image-section">
                  <img src={items.image} alt={items.description} />
                </div>
                <div>
                  <p>{items.category}</p>
                  <p>₹ {items.price}</p>
                  <span>{items.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mens;
