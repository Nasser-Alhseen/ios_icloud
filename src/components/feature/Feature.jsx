import React from 'react';
import './feature.css';

function Feature({ title, text, id }) {
  const content =<div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
    <h4>{title}</h4>

      <div />
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>


  </div>
  return content


};

export default Feature;
