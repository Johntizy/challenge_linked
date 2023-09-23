import React from "react";
import { images } from "../../constants";

import { Bounce, Slide} from "react-awesome-reveal";

import "./About.css";

export default function About() {
  return (
    <div className="app_about app_wrapper section_padding">
      <div className="app_wrapper_img">
        <div className="app_about-img_wrapper">
          <Bounce>
            <div className="app_about-image">
              <img src={images.about} alt="" />
            </div>
          </Bounce>
        </div>
      </div>
      <div className="app_wrapper_info">
        <div className="app_about-info_head">
          <Slide direction="up">
            <h1 className="headtext">
              Introduction to getlinked <br />
              <span>tech Hackathon 1.0</span>
            </h1>
          </Slide>
        </div>
        <Slide direction="up">
          <p className="p_montserrat-14 app_about-text">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </Slide>
      </div>

      
      <img src={images.satagra} alt="gradient-top" className="absolute_star_top_left stars" />
      <img src={images.starpu} alt="gradient-top" className="absolute_star_right_middle stars" />
    </div>
  );
}
