import { useState } from "react";
import { useParams } from "react-router-dom";

//  css
import "./ProductDetails.scss";
const products = {
  newArrivals: [
    {
      id: 1,
      name: "Elegant Straight Cotton Kurti",
      title: "Women’s Casual Straight Kurti with Side Slits",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865427/pexels-shootsaga-30809730_nrurvm.webp",
      price: "$25",
      description:
        "Crafted from soft, breathable fabric, it promises all-day comfort—whether you're braving the summer sun or enjoying a cozy indoor afternoon. The subtle elegance of the design makes it suitable for both casual outings and semi-formal gatherings.",
    },
    {
      id: 2,
      name: "Floral Print A-Line Kurti",
      title: "Rayon A-Line Kurti with Floral Pattern and 3/4 Sleeves",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749865428/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy3_p8wvbi.webp",
      price: "$30",
    },
    {
      id: 3,
      name: "Classic Printed Cotton Kurti",
      title: "Ethnic Straight Kurti with Block Print Design",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
      price: "$28",
    },
    {
      id: 4,
      name: "Elegant Kurti with Embroidery",
      title: "Designer Kurti with Intricate Thread Work",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808440/pexels-mk-1182794846-22431192_xp4umg.webp",
      price: "$40",
    },
    {
      id: 5,
      name: "Block Print Cotton Kurti",
      title: "Women’s Casual Block Print Straight Kurti",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
      price: "$25",
    },
    {
      id: 6,
      name: "Comfort Fit Rayon Kurti",
      title: "Lightweight Rayon Kurti for Daily Wear",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
      price: "$30",
    },
    {
      id: 7,
      name: "Elegant Printed Kurti",
      title: "Stylish Kurti with Allover Print & Button Detailing",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
      price: "$28",
    },
    {
      id: 8,
      name: "Traditional Cotton Kurti",
      title: "Classic Cotton Kurti with Embroidered Yoke",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808438/pexels-dhanno-20702673_qucy6z.webp",
      price: "$40",
    },
  ],
  bestSellers: [
    {
      id: 9,
      name: "Winter Velvet Kurti",
      title: "Women’s Velvet Kurti with Full Sleeves",
      image:
        "https://res.cloudinary.com/dqprmy5ro/image/upload/v1749808445/pexels-mk-1182794846-22064227_xmiygk.webp",
      price: "$32",
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

const sizes = ["S", "M", "L", "XL"];

const ProductDetails = () => {
  const { id } = useParams();
  const allProducts = [
    ...products.newArrivals,
    ...products.bestSellers,
    ...products.saleItems,
  ];
  const product = allProducts.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} of size ${selectedSize} to cart!`);
  };

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
          <p className="price">{product.price}</p>

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
