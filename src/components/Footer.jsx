// import { Link } from "react-router-dom";
//icons imports
// icon
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { CiStopwatch } from "react-icons/ci";

import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main_footer">
      <div className="sub_footer">
        <div className="footer_image">
          <img src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1759389655/Gemini_Generated_Image_7mgp457mgp457mgp_tzfbal.png" />
        </div>
        <div className="heading_text_footer">
          <p className="main_heading_footer">
            Welcome to Soni Collection website, we are an MSE based out of india{" "}
            <br />
            We aim to diliver high-quality Product to our customers.
          </p>
        </div>

        <div className="address_icon_main_section">
          <div className="address_item">
            <CiLocationOn className=" location_icon text-[40px]" />
            <span>Bypass Road Gurua Near By Jio Office Gurua Gaya, 824205</span>
          </div>
          <div className="address_item">
            <PiPhoneCallThin className="text-[25px]" />
            <Link>+91 - 93</Link>
          </div>
          <div className="address_item">
            <PiWhatsappLogoThin className="text-[25px]" />
            <Link>+91 - 6202802412</Link>
          </div>
          <div className="address_item">
            <CiStopwatch className="text-[25px]" />
            <span>Mon-Sun, 9 AM to 4 PM</span>
          </div>
        </div>
      </div>
      <div className="footer_combind_two_section">
        <div className="footer_shop_section">
          <div>
            <h1 className="footer_shop">Shop</h1>
          </div>
          <div className="footer_sub_item_section">
            <NavLink to="/productmanager" className="footer_item_all_text">
              Product Manager
            </NavLink>
            <p className="footer_item_all_text">GOWN</p>
            <p className="footer_item_all_text">IN THE SPOTLIGHT</p>
            <p className="footer_item_all_text">ETHNIC WEAR</p>
            <p className="footer_item_all_text">KURTI</p>
          </div>
        </div>
        <div className="footer_shop_section">
          <div>
            <h1 className="footer_shop">Policy</h1>
          </div>
          <div className="footer_sub_item_section">
            <p className="footer_item_all_text">About Us</p>
            <p className="footer_item_all_text">Privacy Policy</p>
            <p className="footer_item_all_text">Return Policy</p>
            <p className="footer_item_all_text">Shipping Policy</p>
            <p className="footer_item_all_text">Terms and Condition</p>
            {/* <p className="footer_item_all_text">Boys</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
