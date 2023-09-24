import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { images } from "../../constants";
import { useState } from "react";

const Menu = ({ closeMenu }) => (
  <>
    <p onClick={closeMenu}>
      <a href="/#timeline">Timeline</a>
    </p>
    <p onClick={closeMenu}>
      <a href="/#overview">Overview</a>
    </p>
    <p onClick={closeMenu}>
      <a href="/#faqs">FAQs</a>
    </p>
    <p className="navbar_link-contact" onClick={closeMenu}>
      <NavLink to="contact">Contacts</NavLink>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
        
      <div className="navbar_links">
        <div className="navbar_logo">
          <NavLink to="/">
            <img src={images.getlinked} alt="Logo" />
          </NavLink>
        </div>
        <div className="navbar_links_container">
          <Menu />
        </div>
        <div className="navbar_sign">
          <NavLink to="register">
            <button className="custom_button">Register</button>
          </NavLink>
        </div>
      </div>
{toggleMenu && <div className="overlay_navbar" onClick={() => setToggleMenu(false)}></div>}
      <div className="navbar_menu">
        {toggleMenu ? (
          <a
            color="#fff"
            onClick={() => setToggleMenu(false)}
            className="close"
          >
            <img src={images.close} style={{zIndex: '1000', position: 'relative'}}/>
          </a>
        ) : (
          <a color="#fff" onClick={() => setToggleMenu(true)}>
            <img src={images.toggle} />
          </a>
        )}
        {toggleMenu && (
          <div className="navbar_menu_container scale-up-center">
            <div className="navbar_menu_links">
              <Menu closeMenu={() => setToggleMenu(false)} />
              <div className="navbar_menu_sign">
                <NavLink to="register" onClick={() => setToggleMenu(false)}>
                  <button className="custom_button">Register</button>
                </NavLink>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
