import React, {useEffect} from "react";
import { images } from "../../constants";
import { Bounce, Slide } from "react-awesome-reveal";

import "./Privacy.css";


const Privacy = () => {
  return (
    <div className="app_privacy app_wrapper_top section_padding">
      <div className="app_wrapper_info">
        <div className="app_privacy-info_head">
          <Slide direction="up">
            <h1 className="headtext">
              Privacy Policy and <br />
              <span>Terms </span>
            </h1>
          </Slide>
        </div>

        <div className="app_privacy-info_sub">
          <Slide direction="up" delay={200}>
            <p>Last updated on September 12, 2023</p>
          </Slide>
        </div>

        <Slide direction="up" delay={400}>
          <p className="p_montserrat-14">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </Slide>
        <div className="app_privacy-content">
          <Slide direction="up" delay={800}>
            <p className="p_montserrat-14 app_privacy-text" style={{textAlign: 'left'}}>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
          </Slide>

          <div className="app_privacy-content_subtitle">
            <Slide direction="up" delay={1000}>
              <p>Licensing Policy</p>
            </Slide>
            <Slide direction="up" delay={1200}>
              <p className="p_montserrat-14">
                Here are terms of our Standard License:
              </p>
            </Slide>
          </div>

          <div className="app_privacy-content_tick">
            <Slide direction="right" delay={1500}>
              <img src={images.tick} alt="" />
            </Slide>
            <Slide direction="up" delay={1500}>
              <p className="p_montserrat-14 tick_text">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </Slide>
          </div>

          <div className="app_privacy-content_tick">
            <Slide direction="right" delay={1500}>
              <img src={images.tick} alt="" />
            </Slide>
            <Slide direction="up" delay={1500}>
              <p className="p_montserrat-14 tick_text">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </Slide>
          </div>
          <Bounce delay={2000}>
            <div className="app_privacy-btn">
              <button className="custom_button">Read More</button>
            </div>
          </Bounce>
        </div>
      </div>
      <div className="app_wrapper_img">
        <div className="app_privacy-img_wrapper">
          <Bounce>
            <div className="app_privacy-image">
              <img src={images.secure} alt="" />
            </div>
          </Bounce>
        </div>
      </div>

      <div className="gradient_circle_section-bottom_left ">
        <img src={images.lens} alt="gradient-top" />
      </div>

      <img
        src={images.satagra}
        alt="gradient-top"
        className="absolute_star_middle_m stars"
      />
      <img
        src={images.satagra}
        alt="gradient-top"
        className="absolute_star_top_m stars"
      />
    </div>
  );
}

export default Privacy;
