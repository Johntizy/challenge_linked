import React from "react";

import Accordion from "../../components/Accordion/Accordion";
import { images, data } from "../../constants";

import "./Faqs.css";
import { Bounce, Slide } from "react-awesome-reveal";

const Faqs = () => {
  return (
    <div className="app_judge app_wrapper_top section_padding" id="faqs">
      <div className="app_wrapper_info">
        <div className="app_judge-info_head">
          <Slide direction="up">
            <h1 className="headtext">
              Judging Criteria <br />
              <span>Key attributes</span>
            </h1>
          </Slide>
        </div>

        <Accordion sections={data.accordionData} />
      </div>
      <div className="app_wrapper_img">
        <div className="app_judge-img_wrapper">
          
            <div className="app_judge-image">
             <Bounce> <img src={images.cloudman} alt="" /> </Bounce>
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default Faqs;
