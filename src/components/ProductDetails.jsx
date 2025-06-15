import { useParams } from "react-router-dom";

const products = {
  newArrivals: [
    {
      id: 1,
      name: "New Jacket dfghjklertyuio",
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

const ProductDetails = () => {
  const { id } = useParams();

  const allProducts = [
    ...products.newArrivals,
    ...products.bestSellers,
    ...products.saleItems,
  ];

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Product Details</h2>
      <img src={product.image} alt={product.name} width="300" />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
