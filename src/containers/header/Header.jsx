
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
      <div className="twrite_title">   
      <h1 className="gradient__text" style={{fontFamily:'monospace',margin:'10px'}}>
       فتح حسابات آيكلاود             </h1> 
        
      </div>
      <div className="twriter">
      <Type />
      </div>
    
    </div>

    
  </div>
);

export default Header;
