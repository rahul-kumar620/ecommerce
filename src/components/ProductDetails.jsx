import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

//  css
import "./ProductDetails.scss";

const sizes = ["S", "M", "L", "XL"];

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { product: passedProduct } = location.state || {};

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedSize,
    };

    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const product = passedProduct;
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <div className="product-container">
        <div className="left-panel">
          <img className="main-image" src={product.image} alt={product.name} />
          <div className="thumbnails">
            {[1, 2, 3, 4].map((thumb) => (
              <img
                key={thumb}
                src={product.image}
                alt={`${product.name} thumbnail ${thumb}`}
              />
            ))}
          </div>
        </div>
        <div className="right-panel">
          <h1>{product.name}</h1>
          <h3>{product.title}</h3>
          <p className="price"> ₹{product.price}</p>

          <div className="description">
            <h4>Description</h4>
            <p>{product.description}</p>
            <p>
              Features include breathable material, intricate embroidery, and an
              elegant design that suits all ages.
            </p>
          </div>

          <div className="size-selector">
            <label htmlFor="size">Select Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="buttons">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button>Buy Now</button>
          </div>

          <div className="extra-details">
            <h4>Product Details</h4>
            <ul>
              <li>Material: Cotton & Rayon blend</li>
              <li>Care Instructions: Hand wash recommended</li>
              <li>Fit: Regular fit with side slits</li>
              <li>Occasion: Casual, Festive, Daily Wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
