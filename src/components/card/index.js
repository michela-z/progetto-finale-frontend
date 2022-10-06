import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <div>
      <h2 className='title'>{props.title}</h2>
      <p className='card-subtitle'>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default Card;