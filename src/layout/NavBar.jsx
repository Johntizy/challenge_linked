import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/getlinked.png";
import Button from "../components/Button";

import {images} from '../constants';
//style
import "./Navbar.css";

const Menu = () => (
  <ul className="navbar_link">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li className="navbar_link-contact">
            <NavLink to="contact">Contacts</NavLink>
          </li>
        </ul>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar_links-container">
        <Menu />

        <NavLink to="register">
          <Button className="custom_button">Register</Button>
        </NavLink>
      </div>

      <div className='navbar_mobile'>
            {toggleMenu ? <a color="#fff" onClick={() => setToggleMenu(false)} className='navbar_close'><img src={images.close}  /></a> : <a color="#fff" onClick={() => setToggleMenu(true)} ><img src={images.toggle}  /></a>}
            {toggleMenu && 
            <div className='navbar_mobile-container scale-up-center'>
                <div className='navbar_mobile-links'>
                  <Menu />

                  <NavLink to="register">
                    <Button className="custom_button">Register</Button>
                  </NavLink>
                </div>
            </div>
            }
        </div>
    </nav>
  );
};

export default NavBar;
