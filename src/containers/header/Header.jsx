
import React from "react";
import "./header.css";
import Type from './Type'
import LottieApple from './lottie';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">

    <div className="gpt3__header-content">
      <div>   
           <Type />
      </div>

    </div>

    <div className="gpt3__header-image">
      <LottieApple />
    </div>
  </div>
);

export default Header;
