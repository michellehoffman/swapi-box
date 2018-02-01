import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ arrayToDisplay, type, addFavorite }) => {
  const cards = () => arrayToDisplay.map( item => (
    <Card item={ item } 
          type={ item.type } 
          addFavorite={ addFavorite } />)
  )
  const displayContent = arrayToDisplay ? cards() : "no favorites"

  return (
    <div>
      { displayContent }
    </div>
  )
}

export default CardContainer;