import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ arrayToDisplay, addFavorite }) => {
  const cards = () => arrayToDisplay.map( item => (
    <Card item={ item }
          addFavorite={ addFavorite } /> )
  )

  const displayContent = arrayToDisplay ? cards() : "no favorites"

  return (
    <div class="card-container">
      { displayContent }
    </div>
  )
}

export default CardContainer;