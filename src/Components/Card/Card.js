import React from 'react';
import './Card.css';

const Card = ({ name, homeworld, species, population }) => {

  return (
    <div>
      <h2>{ name }</h2>
      <ul>
        <li>{ homeworld }</li>
        <li>{ species }</li>
        <li>{ population }</li>
      </ul>
      <button>+</button>
    </div>
  )
}

export default Card;