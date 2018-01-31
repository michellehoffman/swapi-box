import React from 'react';
import './Card.css';

const Card = ({ type, item }) => {
  const details = { ...item } 
  let { name, population } = details
  let { homeworld, species, terrain, climate, residents, model, vehicle_class, passengers } = details

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

  const vehicleDetails = 
    <div>
      <ul>
        <li>Model: { model }</li>
        <li>Class: { vehicle_class }</li>
        <li>Number of Passengers: { passengers }</li>
      </ul>
    </div>

  const cardRendered = () => {
    if(type === 'people') {
      return peopleDetails;
    } else if(type === 'planets') {
      return planetDetails;
    } else if(type === 'vehicles') {
      return vehicleDetails;
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