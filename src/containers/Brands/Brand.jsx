import React from "react";
import "./Brand.css";
import { images } from "../../constants";
import { Fade, Slide } from "react-awesome-reveal";

export default function Brand() {
  return (
    <div className="app_branding section_padding">
      <Slide direction="up">
        <div className="app_branding-title">
          <h1 className="headtext">Partners and Sponsors</h1>

          <p className="p_montserrat">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </Slide>
      <div className="app_branding-brands">
          <img src={images.sponsors} alt="" />

      </div>

      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
      </div>
    </div>
  );
}
