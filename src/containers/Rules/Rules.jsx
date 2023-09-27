import React from "react";
import { images } from "../../constants";
import { Bounce, Slide } from "react-awesome-reveal";

import "./Rules.css";

const Rules = () => {
  return (
    <div className="app_rules app_wrapper section_padding">
      <div className="app_wrapper_info">
        <div className="app_rules-info_head">
          <Slide direction="up">
            <h1 className="headtext">
              Rules and <br />
              <span>Guidelines</span>
            </h1>
          </Slide>
        </div>
        <Slide direction="up">
          <p className="p_montserrat-14 app_rules-text">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </Slide>
      </div>

      <div className="app_wrapper_img">
        <div className="app_rules-img_wrapper gradient_bg_right">
          <Bounce>
            <img src={images.rules} alt="" />
          </Bounce>
        </div>
      </div>

      <div className="gradient_circle_section-top ">
        <img src={images.lens} alt="gradient-top" />
      </div>

      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
      </div>

      
      <img src={images.prestar} alt="gradient-top" className="absolute_star_top stars" />
      <img src={images.star} alt="gradient-top" className="absolute_star_middle stars" />
    </div>
  );
}

export default Rules;