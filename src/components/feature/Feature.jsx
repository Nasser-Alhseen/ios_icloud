import React from 'react';
import './feature.css';

function Feature({ title, text ,id }) {
const content=id=='1'?  <div className="gpt3__features-container__feature">
<div className="gpt3__features-container_feature-text">
 <p>{text}</p>
</div>
<div className="gpt3__features-container__feature-title">
 <div />
 <h1>{title}</h1>
</div>

</div>:  <div className="gpt3__features-container__feature">
<div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
       <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
      
     
    </div>
  return  content
 
 
};

export default Feature;
