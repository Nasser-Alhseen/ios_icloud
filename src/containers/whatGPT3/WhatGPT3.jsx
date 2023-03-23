import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Steps" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">How to unlock your Icloud Account</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Contact" text="Contant with us on Whatsapp" />
      <Feature title="Diagnosing" text="We recieve your request and diagnose the device" />
      <Feature title="Confirmation" text="We contact you to confrim the process" />
      <Feature title="Unlocking" text="We start working immediatly on your device" />
    </div>
  </div>
);

export default WhatGPT3;
