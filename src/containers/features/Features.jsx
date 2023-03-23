import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const Features = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">So Far</h1>
    </div>    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature title="Iphone" text="46 Iphone were unlocked sofar" />
      <Feature title="Clients" text="96 client from different countries" />
      <Feature title="Apple Porducts" text="50 Other devices were unlocked including Ipads ,watches,Macs" />
    </div>
  </div>
);

export default Features;
