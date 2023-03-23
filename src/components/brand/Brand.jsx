import React from 'react';
import { google, slack, atlassian, dropbox } from './imports';
import './brand.css';
const Brand = () => (
  <div className="gpt3__brand_section__padding">
    <div >
      <img src={google} />
       <h3>آيباد</h3>
    </div>
   
    <div>
      <img src={slack} />
      <h3>آيفون</h3>

    </div>
    <div>
      <img src={atlassian} />
      <h3>ساعة آبل</h3>

    </div>
    <div>
      <img src={dropbox} />
      <h3>ماك</h3>

    </div>
   
  </div>
);

export default Brand;
