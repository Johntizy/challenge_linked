import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {images} from '../../constants';
import { useState } from 'react';

const Menu = () => (
  <>
    <p><a href='#header'>Timeline</a></p>
    <p><a href='#whatgpt'>Overview</a></p>
    <p><a href='#possibility'>FAQs</a></p>
    <p className="navbar_link-contact">
        <NavLink to="contact">Contacts</NavLink>
    </p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className='navbar_links'>
            <div className='navbar_logo'>
            <NavLink to="/">
                <img src={images.getlinked} alt='Logo' />
            </NavLink>
            </div>
            <div className='navbar_links_container'>
                <Menu />
            </div>
            <div className='navbar_sign'>
                <NavLink to="register">
                    <button type='button'>Register</button>
                </NavLink>
            </div>
        </div>
      
        <div className='navbar_menu'>
            {toggleMenu ? <a color="#fff" onClick={() => setToggleMenu(false)} className='close'><img src={images.close}  /></a> : <a color="#fff" onClick={() => setToggleMenu(true)} ><img src={images.toggle}  /></a>}
            {toggleMenu && 
            <div className='navbar_menu_container scale-up-center'>
                <div className='navbar_menu_links'>
                <Menu />
                <div className='navbar_menu_sign'>
                    <NavLink to="register"><button type='button'>Register</button></NavLink>
                </div>
                </div>
            </div>
            }
        </div>
        </div>
  )
}

export default Navbar