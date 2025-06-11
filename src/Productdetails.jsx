import { useParams } from "react-router-dom";
import { products } from "./data";

const Productdetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default Productdetail;
