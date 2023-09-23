import React from "react";
import { images } from "../../constants";
import "./Medal.css";
import { Slide } from "react-awesome-reveal";

export default function Medal() {
  return (
    <div className="app_medal section_padding">
      <div className="app_wrapper">
        <div className="app_wrapper_img">
          <div className="app_rules-img_wrapper">
            <img src={images.trophy} alt="" />
          </div>
        </div>
        <div className="app_wrapper_info">
          
            <div className="app_judge-info_head"><Slide direction="up" damping={2}>
              <h1 className="headtext">
                Prizes and <br />
                <span>Rewards</span>
              </h1></Slide>
              <Slide direction="up" delay={500}>
              <p className="p_montserrat-16 app_judge-text">
                Highlight of the prizes and rewards for winners and for
                participants.{" "}
              </p></Slide>
            </div>
          
            <Slide direction="up">
          <div className="app_medal-lijsts">
            <img src={images.medals} alt="" style={{ width: "100%" }} />
          </div>
          </Slide>
        </div>
      </div>

      <div className="gradient_circle_section-top ">
        <img src={images.lens} alt="gradient-top" />
      </div>

      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
      </div>
    </div>
  );
}
