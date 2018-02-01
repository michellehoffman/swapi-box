import React from 'react';
import './Card.css';

const Card = ({ type, item, addFavorite }) => {
  const details = { ...item } 
  const { name } = details;

  const peopleDetails = (details) => {
    const { homeworld, species, population } = details;

    return (
      <div>
        <li>Homeworld: { homeworld }</li>
        <li>Species: { species }</li>
        <li>Population: { population }</li>
      </div>
    )
  }

  const planetDetails = (details) => {
    const { terrain, climate, population, residents } = details;

    return (
      <div>
        <li>Terrain: { terrain }</li>
        <li>Climate: { climate }</li>
        <li>Population: { population }</li>
        <li>Residents: { residents }</li>
      </div>
    )
  }

  const vehicleDetails = (details) => {
    const { model, vehicle_class, passengers } = details;

    return (
      <div>
        <li>Model: { model }</li>
        <li>Class: { vehicle_class }</li>
        <li>Number of Passengers: { passengers }</li>
      </div>
    )
  }

  const cardRendered = () => {
    if(type === 'people') {
      return peopleDetails(details);
    } else if(type === 'planets') {
      return planetDetails(details);
    } else if(type === 'vehicles') {
      return vehicleDetails(details);
    }
  }

  const addFavoriteCard = () => {
    addFavorite(item);
  }

  return (
    <div>
      <h2>{ name }</h2>
      <ul>
        { cardRendered() }
      </ul>
      <button onClick={ addFavoriteCard }>+</button>
    </div>
  )
}

export default Card;