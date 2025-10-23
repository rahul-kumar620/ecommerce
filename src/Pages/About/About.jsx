// import { useEffect, useState } from "react"
import "./About.scss";
const About = () => {
  return (
    <div className="about_main_container">
      <div className="about_heading">
        <h1 className="abot_heading_text"> Welcome to Sonicollection</h1>
      </div>
      <div className="about_dividev_part">
        <div className="sub_tex">
          <p>
            At [Your Brand Name], fashion is more than just clothing – it’s a
            reflection of identity, confidence, and culture. Born from a passion
            for style and a vision to bring high-quality, affordable fashion to
            everyone, our journey started with a simple goal: to make you feel
            good in what you wear. Every thread we use, every design we create,
            and every product we deliver carries a piece of our heart. From
            traditional roots to modern trends, we blend elegance with comfort
            to offer something truly special for every occasion. Whether youre
            dressing up for a celebration or keeping it casual, we’re here to
            make sure you always look and feel your best. Welcome to the family
            – where style meets soul.
          </p>
        </div>
        <div className="main_image_section">
          <img
            src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1760718295/photo-1525507119028-ed4c629a60a3_iampp5.avif"
            alt="clothes"
            className="iamge_section"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
