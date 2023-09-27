import React from "react";
import { images } from "../../constants";
import "./Medal.css";
import { Slide } from "react-awesome-reveal";

import gold from "../../assets/medal/gold.svg";
import silver from "../../assets/medal/silver.svg";
import bronze from "../../assets/medal/bronze.svg";

const Medal = () => {
  return (
    <div className="app_medal section_padding">
      <div className="app_wrapper">
        <div className="app_wrapper_img">
          <div className="app_rules-img_wrapper">
            <img src={images.trophy} alt="" />
          </div>
        </div>
        <div className="app_wrapper_info">
          <div className="app_judge-info_head">
            <Slide direction="up" damping={2}>
              <h1 className="headtext">
                Prizes and <br />
                <span>Rewards</span>
              </h1>
            </Slide>
            <Slide direction="up" delay={500}>
              <p className="p_montserrat-16 app_judge-text">
                Highlight of the prizes and rewards for winners and for
                participants.
              </p>
            </Slide>
          </div>

          <div className="app_medal-list_card">
            <Slide direction="up" delay={700}>
              <div className="app_medal-card">
                <img src={silver} alt="silver-medal" />
                <div className="app_medal-card_content">
                  <h3 className="position_text">2nd</h3>
                  <h3 className="runner_text">Runner</h3>
                  <h3 className="prize_text">N400000</h3>
                </div>
              </div>
            </Slide>
            <Slide direction="up" delay={900}>
              <div className="app_medal-card2">
                <img src={gold} alt="silver-medal" />
                <div className="app_medal-card_content">
                  <h3 className="position_text">1st</h3>
                  <h3 className="runner_text">Runner</h3>
                  <h3 className="prize_text">N400000</h3>
                </div>
              </div>
            </Slide>
            <Slide direction="up" delay={1000}>
              <div className="app_medal-card">
                <img src={bronze} alt="silver-medal" />
                <div className="app_medal-card_content">
                  <h3 className="position_text">3rd</h3>
                  <h3 className="runner_text">Runner</h3>
                  <h3 className="prize_text">N400000</h3>
                </div>
              </div>
            </Slide>
          </div>

          {/* <Slide direction="up">
            <div className="app_medal-lijsts">
              <img src={images.medals} alt="" style={{ width: "100%" }} />
            </div>
          </Slide> */}
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

export default Medal;
