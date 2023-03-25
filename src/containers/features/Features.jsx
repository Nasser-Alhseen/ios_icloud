import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import forwardIcon from '../../assets/whatsapp.png';
import Card from '../../components/card/card';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/client.json";
const Features = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3-f">
    <div className="gpt3__footer-links_div">
        <h4>تواصل معنا</h4>
        <p>+96170400713</p>
      
        <div className="soc">
          <a href="https://wa.me/+96170400713">    
              <img src={forwardIcon} alt="" />
          </a>
        </div>
        <div>
        <Lottie      style={{ height: 250 }}
animationData={groovyWalkAnimation} loop={true} />;

        </div>
   
      </div>
    <div className="gpt3__whatgpt3-feature">
    
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">حتى الآن</h1>
    </div>   
     </div>

    <div className="gpt3__whatgpt3-container">
      <Card title="150" text="عددالعملاء المميزين" id='2'/>
      <Card title="180" text="عدد أجهزة أبل التي قمنا بفتحها وجعلنا أصحابها سعداء" id='2'/>
      <Card title="142" text="آيفون" id='2'/>
      <Card title= '38' text='أجهزة آبل أخرى' id='2'/>
    </div>
  </div>
);

export default Features;
