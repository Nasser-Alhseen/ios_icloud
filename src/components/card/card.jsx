import React from 'react';
import './card.css';
import Feature from '../feature/Feature';
const Card=({title,text ,id})=>{
    const content=id=='1'?<div className='mainContainer'>
    <Feature title={title} text={text}/>
</div>:    <div className='mainContainer2'>
    <h4>{title}</h4>
    <h5>{text}</h5>

</div>

    return content
}

export default Card;