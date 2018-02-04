import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ arrayToDisplay, addFavorite }) => {
  const renderCards = arrayToDisplay.map( item => (
    <Card item={ item }
          addFavorite={ addFavorite }
          key={ Date.now() + item.name } /> )
  )

  return (
    <div className="card-container">
      { renderCards }
    </div>
  )
}

CardContainer.propTypes = {
  arrayToDisplay: array.isRequired,
  addFavorite: func.isRequired
}

export default CardContainer;