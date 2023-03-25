import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import appleLogo from './logoApple.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links_logo">
        <h2>Off Done</h2>
      </div>
      <div className="gpt3__navbar-links">

        <div className="gpt3__navbar-links_container">
          <button type="button" className="nav-btn">
            <a href="#home"><p>الرئيسية</p></a>
          </button>
          <button type="button" className="nav-btn">
            <a href="#wgpt3">الخطوات</a>
          </button>
          <button type="button" className="nav-btn">
            <a href="#wgpt3-f">عملائنا</a>
          </button>
          <button type="button" className="nav-btn">
            <a href="#footer">حول</a>
          </button>

        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <button type="button" className="nav-btn">
                <a href="#home">الرئيسية</a>
              </button>
              <button type="button" className="nav-btn">
                <a href="#home">الخطوات</a>
              </button>
              <button type="button" className="nav-btn">
                <a href="#home">عملائنا</a>
              </button>
              <button type="button" className="nav-btn">
                <a href="#home">حول</a>
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
