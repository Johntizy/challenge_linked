import React from "react";
import { images } from "../../constants";
import "./Footer.css";
import { Slide } from "react-awesome-reveal";

const Footer = () => (
  <div className="app__footer app__bg section_padding">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <Slide direction="up" delay={100}>
          <img src={images.getlinked} alt="footer-logo-image" />
        </Slide>
        <Slide direction="up" delay={200}>
          <p className="p_montserrat-14 app_footer-links_logo-content">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
        </Slide>
        <p className="p_montserrat-14 app_footer-links_logo-content_sub">
          <span>Terms of Use</span> Privacy Policy
        </p>
      </div>
      <div className="app__footer-links_contact">
        <Slide direction="up" delay={100}>
          <h1 className="app__footer-headtext">Useful Links</h1>
        </Slide>
        <Slide direction="up" delay={200}>
          <p className="p_montserrat-14 contact">Overview</p>
        </Slide>
        <Slide direction="up" delay={300}>
          <p className="p_montserrat-14 contact">Timeline</p>
        </Slide>
        <p className="p_montserrat-14 contact">FAQs</p>
        <Slide direction="up" delay={400}>
          <p className="p_montserrat-14 contact">Register</p>
        </Slide>
        <div className="app_footer_follow">
          <div className="app_footer_icons">
            <Slide direction="up" delay={600}>
              <span className="p_montserrat-14" style={{ color: "#d434fe" }}>
                Follow us:{" "}
              </span>
            </Slide>
            <Slide direction="left" delay={100}>
              <img src={images.instagram} alt="" />{" "}
            </Slide>
            <Slide direction="left" delay={650}>
              <img src={images.x} alt="" />{" "}
            </Slide>
            <Slide direction="left" delay={650}>
              <img src={images.facebook} alt="" />
            </Slide>
            <Slide direction="left" delay={650}>
              <img src={images.linkedin} alt="" />{" "}
            </Slide>
          </div>
        </div>
      </div>
      <div className="app__footer-links_work">
        <Slide direction="up" delay={100}>
          <h1 className="app__footer-headtext">Working Hours</h1>
        </Slide>
        <Slide direction="up" delay={200}>
          <p className="p_montserrat-14 work">
            <img src={images.phone} alt="" />
            <span>+234 6707653444</span>
          </p>
        </Slide>
        <Slide direction="up" delay={300}>
          <p className="p_montserrat-14 work">
            <img src={images.location} alt="" />
            <span>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </span>
          </p>
        </Slide>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p_montserrat-14">All rights reserved. © getlinked Ltd.</p>
    </div>
  </div>
);

export default Footer;
