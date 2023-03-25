import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import forwardIcon from '../../assets/whatsapp.png';
import Card from '../../components/card/card'
const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">

    <div className="gpt3__whatgpt3-feature">
      <div className="gpt3__footer-links_div">
        <h4>تواصل معنا</h4>
        <p>+96170400713</p>

        <div className="soc">
          <a href="https://wa.me/+96170400713">
            <img src={forwardIcon} alt="" />
          </a>
        </div>

      </div>
    </div>

    
<div>
    <div className="gpt3__whatgpt3-heading">

      <h2 className="gradient__text">كيفية فتح حساب الآيكلاود</h2>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Card title="تواصل معنا على واتساب" text="قم بالتواصل معنا عبر الواتساب وبتزويدنا برقم الايمي وبعض المعلومات الآخرى" id='1' />
      <Card title=" استلام الطلب" text="نقوم باستلام الطلب منك ونقوم بعمل الفحص اللازم للجهاز المراد فكه" id='1'/>
      <Card title="تأكيد الطلب للمباشرة فيه" text="بعد ان نقوم بعمل تشيك كامل للهاتف نقوم بإعطائك كم الوقت والتكلفة اللازمة لفكه لنباشر بعملية حذف الآيكلود" id='1'/>
      <Card title="نبدأ بالعمل على الامر" text="عندما ينجح الامر نقوم بإخبارك بالنتيجة ونرسل إليك رابط الدفع اللاحق إن كنت أحد عملائنا المميزين" id='1'/>
    </div></div>
  </div>
);

export default WhatGPT3;
