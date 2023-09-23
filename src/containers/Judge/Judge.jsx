import React from "react";
import { images } from "../../constants";
import { Bounce, Slide } from "react-awesome-reveal";

import "./Judge.css";

export default function Judge() {
  return (
    <div className="app_judge app_wrapper section_padding">
      <div className="app_wrapper_img">
        <div className="app_judge-image">
          <Bounce>
            <img src={images.judging} alt="" />
          </Bounce>
        </div>
      </div>
      <div className="app_wrapper_info">
        <div className="app_judge-info_head">
          <Slide direction="up" delay={100}>
            <h1 className="headtext">
              Judging Criteria <br />
              <span>Key attributes</span>
            </h1>
          </Slide>
        </div>
        <Slide direction="up" delay={500}>
          <p className="p_montserrat-14 app_judge-text">
            <span>Innovation and Creativity:</span> Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
        </Slide>
        <Slide direction="up" delay={700}>
          <p className="p_montserrat-14 app_judge-text">
            <span>Functionality:</span> Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
        </Slide>
        <Slide direction="up" delay={1000}>
          <p className="p_montserrat-14 app_judge-text">
            <span>Impact and Relevance:</span> Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </p>
        </Slide>
        <Slide direction="up" delay={1200}>
          <p className="p_montserrat-14 app_judge-text">
            <span>Technical Complexity:</span> Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
        </Slide>
        <Slide direction="up" delay={1500}>
          <p className="p_montserrat-14 app_judge-text">
            <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </p>
        </Slide>
        <Slide direction="up" delay={2000}>
          <button className="custom_button">Read More</button>
        </Slide>
      </div>

      <div className="gradient_circle_section-bottom ">
        <img src={images.lens} alt="gradient-top" />
      </div>
      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
      </div>
      
      <img src={images.starpu} alt="gradient-top" className="absolute_star_top stars" />
      <img src={images.satagra} alt="gradient-top" className="absolute_star_middle stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_right stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_bottom stars" />
    </div>
  );
}
