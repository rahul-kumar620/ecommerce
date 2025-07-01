// import { useState, useEffect } from "react";
import "./Mens.scss";

const Mens = () => {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  //   const [filteredVisible, setFilteredVisible] = useState(false);
  //   const [openDropdown, setOpenDropdown] = useState(null);
  //   useEffect(() => {
  //     const handleResize = () => {
  //       const mobile = window.innerWidth <= 768;
  //       setIsMobile(mobile);
  //       if (!mobile) {
  //         setFilteredVisible(true); // Desktop: filters always visible
  //       }
  //     };
  //     handleResize(); // call initially
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);
  //   const handleFilteredByClick = () => {
  //     if (isMobile) {
  //       setFilteredVisible(!filteredVisible);
  //       setOpenDropdown(null); // reset dropdown
  //     }
  //   };
  //   const toggleDropdown = (section) => {
  //     setOpenDropdown(openDropdown === section ? null : section);
  //   };
  //   return (
  //     <div className="filter-section-women">
  //       <div className="left-filter-side-women">
  //         {/* Filtered By Label (Clickable on mobile) */}
  //         <p className="left-side-text-women" onClick={handleFilteredByClick}>
  //           Filtered By:
  //         </p>
  //         {filteredVisible && (
  //           <>
  //             {/* Product Type */}
  //             <div className="dropdown-women">
  //               <p
  //                 className="left-side-texts-women"
  //                 onClick={() => toggleDropdown("productType")}
  //               >
  //                 Product Type {openDropdown === "productType" ? "▲" : "▼"}
  //               </p>
  //               {openDropdown === "productType" && (
  //                 <div className="dropdown-content-women open">
  //                   <label>
  //                     <input type="checkbox" /> Shirt
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> Pants
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> Jackets
  //                   </label>
  //                 </div>
  //               )}
  //             </div>
  //             {/* Size */}
  //             <div className="dropdown-women">
  //               <p
  //                 className="left-side-texts-women"
  //                 onClick={() => toggleDropdown("size")}
  //               >
  //                 Size {openDropdown === "size" ? "▲" : "▼"}
  //               </p>
  //               {openDropdown === "size" && (
  //                 <div className="dropdown-content-women open">
  //                   <label>
  //                     <input type="checkbox" /> S
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> M
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> L
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> XL
  //                   </label>
  //                 </div>
  //               )}
  //             </div>
  //             {/* Colour */}
  //             <div className="dropdown-women">
  //               <p
  //                 className="left-side-texts-women"
  //                 onClick={() => toggleDropdown("color")}
  //               >
  //                 Colour/Variant {openDropdown === "color" ? "▲" : "▼"}
  //               </p>
  //               {openDropdown === "color" && (
  //                 <div className="dropdown-content-women open">
  //                   <label>
  //                     <input type="checkbox" /> Red
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> Blue
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> Green
  //                   </label>
  //                 </div>
  //               )}
  //             </div>
  //             {/* Price */}
  //             <div className="dropdown-women">
  //               <p
  //                 className="left-side-texts-women"
  //                 onClick={() => toggleDropdown("price")}
  //               >
  //                 Price Range {openDropdown === "price" ? "▲" : "▼"}
  //               </p>
  //               {openDropdown === "price" && (
  //                 <div className="dropdown-content-women open">
  //                   <label>
  //                     <input type="checkbox" /> ₹0 - ₹500
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> ₹500 - ₹1000
  //                   </label>
  //                   <label>
  //                     <input type="checkbox" /> ₹1000+
  //                   </label>
  //                 </div>
  //               )}
  //             </div>
  //           </>
  //         )}
  //       </div>
  //       <div className="right-side-sorted-women">
  //         <button className="right-side-sorteds-women">
  //           <span>Sorted by</span>
  //           <p>Popularity</p>
  //         </button>
  //       </div>
  //     </div>
  //   );
};

export default Mens;
