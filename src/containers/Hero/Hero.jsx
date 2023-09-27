import React from "react";

import { images } from "../../constants";
import "./Hero.css";
import { Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="app_hero">
      <div className="app_hero-top">
        <Slide direction="right">
          <p className="p_montserrat">
            Igniting a Revolution in <span>HR Innovation</span>
          </p>
        </Slide>
      </div>

      <div className="app__hero-wrapper flex_center">
        <div className="app_hero-wrapper_info">
          <div className="head_bulb">
            <img src={images.bulb} />
          </div>
          <Slide direction="up" delay={100}>
            <h1 className="headtext" style={{ display: "flex" }}>
              getlinked Tech
            </h1>
          </Slide>
          <Slide direction="up" delay={300}>
            <h1 className="headtext" style={{ display: "flex" }}>
              Hackathon <span style={{ marginLeft: "1rem" }}>1.0</span>
              <img src={images.chain} />
              <img src={images.fire} />
            </h1>
          </Slide>
          <Slide direction="up" delay={700}>
            <p className="p_montserrat">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </Slide>
          <Slide direction="up" delay={1200}>
            <button className="custom_button">Register</button>
          </Slide>

          <h1 className="timer">
            00<span>H</span> 00<span>M</span> 00<span>S</span>{" "}
          </h1>

          <img
            src={images.prestar}
            alt="gradient-top"
            className="absolute_star3"
          />
        </div>

        <div className="app_hero-wrapper_img">
          <img src={images.man} alt="" />
          <div className="man_gradient">
            <img src={images.lens} alt="gradient-top" />
          </div>
        </div>
      </div>

      <div className="absolute_gradient">
        <img src={images.lens} alt="gradient-top" />
      </div>

      <img
        src={images.star}
        alt="gradient-top"
        className="absolute_star stars"
      />
      <img
        src={images.prestar}
        alt="gradient-top"
        className="absolute_star2 stars"
      />
    </div>
  );
};

export default Hero;
