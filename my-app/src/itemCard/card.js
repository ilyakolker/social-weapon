import React from 'react';
import './card.css';

const Card = (props) => {
 const  style = {
        'width' : '18rem',
        'display' : 'inline-block' 
    }
    return(
<div className="card general" style={style}>
{props.children}
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="#home" className="btn btn-primary">Order Now</a>
  </div>
</div>
    )
}

export default Card;