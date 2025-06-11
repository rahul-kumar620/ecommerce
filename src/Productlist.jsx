import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { products } from "./data";

const ProductList = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1>Product List</h1>
      <div
        className="product-container"
        style={{ display: "flex", gap: "20px" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleView(product.id)}>
              <IoEyeOutline /> View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
