import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const Features = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">حتى الآن</h1>
    </div>    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature title="150" text="عددالعملاء المميزين" />
      <Feature title="120" text="عدد أجهزة أبل التي قمنا بفتحها وجعلنا أصحابها سعداء" />
      <Feature title="آيفون" text="96" />
      <Feature title="أجهزة آبل الأخرى" text="50" />
    </div>
  </div>
);

export default Features;
