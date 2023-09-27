import React from "react";
import "./Brand.css";
import { images } from "../../constants";
import { Fade, Slide } from "react-awesome-reveal";

import assured from "../../assets/partners/assured.svg";
import liberty from "../../assets/partners/liberty.svg";
import winwise from "../../assets/partners/winwise.svg";
import wisper from "../../assets/partners/wisper.svg";
import paybox from "../../assets/partners/paybox.svg";
import visual from "../../assets/partners/visual.svg";

const Brand = () => {
  return (
    <div className="app_branding section_padding">
      <Slide direction="up" delay={300}>
        <div className="app_branding-title">
          <h1 className="headtext">Partners and Sponsors</h1>

          <p className="p_montserrat">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </Slide>
      <div style={{ padding: "1rem" }}>
        <div className="app_branding-brands_partners">
          <div className="app_branding-brands_partners-grid">
            <div className="partners_grid_item partners_grid_item-border-right">
              <div className="partners_grid_item_img">
                <Slide direction="up" delay={400}>
                  <img src={assured} alt="Assured_logo" />
                </Slide>
              </div>
            </div>
            <div className="partners_grid_item partners_grid_item-border-right">
              <div className="partners_grid_item_img">
                <Slide direction="up" delay={500}>
                  <img src={liberty} alt="Assured_logo" />
                </Slide>
              </div>
            </div>
            <div className="partners_grid_item ">
              <div className="partners_grid_item_img">
                <Slide direction="up" delay={600}>
                  <img src={winwise} alt="Assured_logo" />
                </Slide>
              </div>
            </div>
          </div>
          <div className="app_branding-brands_partners-grid">
            <div className="partners_grid_item partners_grid_item-border-right">
              <div className="partners_grid_item2_img">
                <Slide direction="up" delay={700}>
                  <img src={wisper} alt="Assured_logo" />
                </Slide>
              </div>
            </div>
            <div className="partners_grid_item partners_grid_item-border-right">
              <div className="partners_grid_item2_img">
                <Slide direction="up" delay={800}>
                  <img src={paybox} alt="Assured_logo" />
                </Slide>
              </div>
            </div>
            <div className="partners_grid_item ">
              <div className="partners_grid_item2_img">
                <Slide direction="up" delay={900}>
                  <img src={visual} alt="Assured_logo" />
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
      </div>
    </div>
  );
};

export default Brand;
