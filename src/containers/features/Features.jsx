import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import forwardIcon from '../../assets/whatsapp.png';

const Features = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3-f">
    <div className="gpt3__footer-links_div">
        <h4>تواصل معنا</h4>
        <p>+96170400713</p>
      
        <div className="soc">
          <a href="https://wa.me/+96170400713">          <img src={forwardIcon} alt="" />
          </a>
        </div>
   
      </div>
    <div className="gpt3__whatgpt3-feature">
    
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">حتى الآن</h1>
    </div>    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature title="150" text="عددالعملاء المميزين" id={1}/>
      <Feature title="180" text="عدد أجهزة أبل التي قمنا بفتحها وجعلنا أصحابها سعداء" id='1'/>
      <Feature title="142" text="آيفون" id='1'/>
      <Feature title= '38' text='أجهزة آبل أخرى' id='1'/>
    </div>
  </div>
);

export default Features;
