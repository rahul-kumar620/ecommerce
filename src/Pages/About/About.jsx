// import { useEffect, useState } from "react";
// import axios from "axios";

// const About = () => {
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     imageUrls: "",
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/product");
//       const cleaned = res.data.map((item, index) => ({
//         ...item,
//         _id:
//           item._id?.toString?.() ||
//           item.id?.toString?.() ||
//           `fallback-id-${index}`,
//       }));
//       setProducts(cleaned);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!id) {
//       console.error("Cannot delete: invalid ID", id);
//       return;
//     }
//     try {
//       const res = await axios.delete(`http://localhost:8080/product/id/${id}`);
//       if (res.status === 200) {
//         alert("Product deleted!");
//         fetchProducts();
//       }
//     } catch (err) {
//       console.error("Error deleting product:", err);
//     }
//   };

//   const handleAdd = async () => {
//     try {
//       const newProduct = {
//         name: form.name,
//         description: form.description,
//         price: parseFloat(form.price),
//         category: form.category,
//         imageUrls: [form.imageUrls], // image URL array mein bhej rahe hain
//       };
//       await axios.post("http://localhost:8080/product", newProduct);
//       alert("Product added!");
//       setForm({
//         name: "",
//         description: "",
//         price: "",
//         category: "",
//         imageUrls: "",
//       });
//       fetchProducts();
//     } catch (err) {
//       console.error("Error adding product:", err);
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product._id);
//     setForm({
//       name: product.name || "",
//       description: product.description || "",
//       price: product.price || "",
//       category: product.category || "",
//       imageUrls: product.imageUrls?.[0] || "",
//     });
//   };

//   const handleUpdate = async () => {
//     if (!editingProduct) {
//       console.error("No product selected for editing");
//       return;
//     }
//     try {
//       const updated = {
//         name: form.name,
//         description: form.description,
//         price: parseFloat(form.price),
//         category: form.category,
//         imageUrls: [form.imageUrls], // same yahan bhi URL array mein
//       };
//       await axios.put(
//         `http://localhost:8080/product/id/${editingProduct}`,
//         updated
//       );
//       alert("Product updated!");
//       setEditingProduct(null);
//       fetchProducts();
//     } catch (err) {
//       console.error("Error updating product:", err);
//     }
//   };

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   return (
//     <div className="pt-20">
//       <h2>🛒 Product Manager</h2>

//       {/* Add Product Form */}
//       <div
//         style={{
//           border: "2px solid green",
//           padding: "10px",
//           marginBottom: "20px",
//         }}
//       >
//         <h3>➕ Add New Product</h3>
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         <input
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           placeholder="Description"
//         />
//         <input
//           name="price"
//           type="number"
//           value={form.price}
//           onChange={handleChange}
//           placeholder="Price"
//         />
//         <input
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//           placeholder="Category"
//         />
//         <input
//           name="imageUrls"
//           value={form.imageUrls}
//           onChange={handleChange}
//           placeholder="Image URL"
//         />
//         <br />
//         {form.imageUrls && (
//           <img
//             src={form.imageUrls}
//             alt="Preview"
//             style={{ width: "100px", marginTop: "10px" }}
//           />
//         )}
//         <br />
//         <button onClick={handleAdd}>Add Product</button>
//       </div>

//       {/* Product List */}
//       {products.map((product) => (
//         <div
//           key={product._id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           {editingProduct === product._id ? (
//             <>
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//               />
//               <input
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 placeholder="Description"
//               />
//               <input
//                 name="price"
//                 type="number"
//                 value={form.price}
//                 onChange={handleChange}
//                 placeholder="Price"
//               />
//               <input
//                 name="category"
//                 value={form.category}
//                 onChange={handleChange}
//                 placeholder="Category"
//               />
//               <input
//                 name="imageUrls"
//                 value={form.imageUrls}
//                 onChange={handleChange}
//                 placeholder="Image URL"
//               />
//               <br />
//               {form.imageUrls && (
//                 <img
//                   src={form.imageUrls}
//                   alt="Preview"
//                   style={{ width: "100px", marginTop: "10px" }}
//                 />
//               )}
//               <br />
//               <button onClick={handleUpdate}>💾 Save</button>
//               <button onClick={() => setEditingProduct(null)}>❌ Cancel</button>
//             </>
//           ) : (
//             <>
//               <h4>{product.name}</h4>
//               <p>{product.description}</p>
//               <p>
//                 <strong>Price:</strong> ₹{product.price}
//               </p>
//               <p>
//                 <strong>Category:</strong> {product.category}
//               </p>
//               {product.imageUrls?.[0] && (
//                 <img
//                   src={product.imageUrls[0]}
//                   alt={product.name}
//                   style={{ width: "100px", marginTop: "10px" }}
//                 />
//               )}
//               <br />
//               <button onClick={() => handleEditClick(product)}>✏️ Edit</button>
//               <button onClick={() => handleDelete(product._id)}>
//                 🗑 Delete
//               </button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default About;
