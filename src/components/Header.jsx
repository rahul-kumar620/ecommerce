// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Header = () => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <>
//       <nav className="bg-purple-500">
//         <div className="h-16 items-center flex justify-between">
//           {/* Logo */}
//           <div className="text-3xl text-white font-bold px-4">Logo</div>
//           {/* button Desktop */}
//           <div className="hidden sm:block">
//             <a href="" className="text-gray-100 text-lg px-4">
//               Home
//             </a>
//             <a href="" className="text-gray-100 text-lg px-4">
//               SERVICES
//             </a>
//             <a href="" className="text-gray-100 text-lg px-4">
//               ABOUT
//             </a>
//             <a href="" className="text-gray-100 text-lg px-4">
//               CONTACT
//             </a>
//           </div>
//           <button
//             onClick={() => setOpen(!isOpen)}
//             className=" block sm:hidden px-4 text-3xl text-white"
//           >
//             <RxHamburgerMenu />
//           </button>
//         </div>
//         {/* button mobile */}
//         <div
//           className={` ${
//             isOpen ? "block" : "hidden"
//           } block sm:hidden bg-gray-100 space-y-2 pb-3`}
//         >
//           <a href="" className="text-gray-600 text-lg px-4 block">
//             Home
//           </a>
//           <a href="" className="text-gray-600 text-lg px-4 block">
//             SERVICES
//           </a>
//           <a href="" className="text-gray-600 text-lg px-4 block">
//             ABOUT
//           </a>
//           <a href="" className="text-gray-600 text-lg px-4 block">
//             CONTACT
//           </a>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

// sonicollection.in/
// │
// ├── index.html                  # Homepage
// ├── about.html                  # About Us page
// ├── contact.html                # Contact Us page
// ├── product/
// │   ├── product-list.html       # All products listing
// │   └── product-detail.html     # Individual product page (may be dynamic)
// │
// ├── categories/
// │   ├── kurtis.html
// │   ├── gowns.html
// │   └── sets.html
// │
// ├── cart/
// │   └── cart.html               # Cart summary
// │
// ├── checkout/
// │   └── checkout.html           # Checkout flow
// │
// ├── user/
// │   ├── login.html
// │   ├── register.html
// │   └── profile.html
// │
// ├── assets/
// │   ├── css/
// │   │   ├── style.css
// │   │   └── responsive.css
// │   ├── js/
// │   │   ├── main.js
// │   │   └── cart.js
// │   └── images/
// │       ├── logo.png
// │       ├── banner.jpg
// │       └── products/
// │           ├── kurtis/
// │           ├── gowns/
// │           └── sets/
// │
// ├── admin/
// │   ├── dashboard.html
// │   ├── add-product.html
// │   ├── orders.html
// │   └── users.html
// │
// ├── api/
// │   ├── get-products.php
// │   ├── add-to-cart.php
// │   ├── login.php
// │   └── register.php
// │
// ├── database/
// │   └── db-config.php
// │
// ├── includes/
// │   ├── header.php
// │   ├── footer.php
// │   └── nav.php
// │
// └── .htaccess
