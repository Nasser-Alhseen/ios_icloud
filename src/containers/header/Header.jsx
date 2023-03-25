
import React from "react";
import "./header.css";
import Type from './Type'
import LottieApple from './lottie';
import forwardIcon from '../../assets/whatsapp.png';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-image">
      <LottieApple />
    </div>
    <div className="gpt3__header-content">
      <div className="gradient__text" style={{ fontSize:'1.7rem',fontFamily: 'monospace' ,textAlign:'center' ,marginRight:'0px' }}>
      مرحبا بك في عالم الآيكلاود  
       

      </div>


    </div>


  </div>
);

export default Header;
