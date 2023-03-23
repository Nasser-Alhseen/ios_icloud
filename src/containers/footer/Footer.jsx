import React from 'react';
import './footer.css';
import downloadIcon from '../../assets/facebook.png';
import forwardIcon from '../../assets/whatsapp.png';
const Footer = () => (
  <div className="gpt3__footer section__padding">



    <div className="gpt3__footer-links">
      <div className="gpt3__navbar-links_logo">
        <h2>Off Done</h2>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>7161643</p>
        <p>icloud@gmail.com</p>
   <div className="social">
   <div className="soc">
          <a href="">          <img src={downloadIcon} alt="" />
          </a>
        </div>
        <div className="soc">
          <a href="">          <img src={forwardIcon} alt="" />
          </a>
        </div>
   </div>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Off Done. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
