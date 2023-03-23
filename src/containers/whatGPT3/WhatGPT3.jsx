import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import forwardIcon from '../../assets/whatsapp.png';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
     
    <div className="gpt3__whatgpt3-feature">
    <div className="gpt3__footer-links_div">
        <h4>تواصل معنا</h4>
        <p>+96170400713</p>
      
        <div className="soc">
          <a href="https://wa.me/+96170400713">          <img src={forwardIcon} alt="" />
          </a>
        </div>
   
      </div>
    </div>
    <div className="gpt3__whatgpt3-heading">
    <Feature title="الخطوات" />

      <h1 className="gradient__text">كيف فتح حساب الآيكلاود</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="تواصل معنا على واتساب" text="قم بالتواصل معنا عبر الواتساب وبتزويدنا برقم الايمي وبعض المعلومات الآخرى" />
      <Feature title=" استلام الطلب" text="نقوم باستلام الطلب منك ونقوم بعمل الفحص اللازم للجهاز المراد فكه" />
      <Feature title="تأكيد الطلب للمباشرة فيه" text="بعد ان نقوم بعمل تشيك كامل للهاتف نقوم بإعطائك كم الوقت والتكلفة اللازمة لفكه لنباشر بعملية حذف الآيكلود" />
      <Feature title="نبدأ بالعمل على الامر" text="عندما ينجح الامر نقوم بإخبارك بالنتيجة ونرسل إليك رابط الدفع اللاحق إن كنت أحد عملائنا المميزين" />
    </div>
  </div>
);

export default WhatGPT3;
