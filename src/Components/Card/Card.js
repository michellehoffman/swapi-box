import React from 'react';
import './Card.css';

const Card = ({ type, item }) => {
  const details = { ...item } 
  let { name, population } = details
  let { homeworld, species } = details
  let { terrain, climate, residents } = details

  const peopleDetails =  
    <div>
      <ul>
        <li>Homeworld: {homeworld}</li>
        <li>Species: {species}</li>
        <li>Population: {population}</li>
      </ul>
    </div>

  const planetDetails = 
    <div>
      <ul>
        <li>Terrain: {terrain}</li>
        <li>Climate: {climate}</li>
        <li>Population: {population}</li>
        <li>Residents: {residents}</li>
      </ul>
    </div>

  const cardRendered = () => {
    if(type === 'people') {
      return peopleDetails;
    } else if(type === 'planets') {
      return planetDetails;
    }
  }

  return (
    <div>
      <h2>{ name }</h2>
      { cardRendered() }  
      <button>+</button>
    </div>
  )
}

export default Card;