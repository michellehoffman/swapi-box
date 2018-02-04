import React from 'react';
import Card from '../Card/Card';
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

export default CardContainer;