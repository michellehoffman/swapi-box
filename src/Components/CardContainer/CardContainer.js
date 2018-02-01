import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ arrayToDisplay, type, addFavorite }) => {
  const renderedCards = arrayToDisplay.map( item => <Card item={ item } type={ type } addFavorite={ addFavorite } />)

  return (
    <div>
      { renderedCards }
    </div>
  )
}

export default CardContainer;