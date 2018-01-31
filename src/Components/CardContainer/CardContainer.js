import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ arrayToDisplay }) => {
  const renderedCards = arrayToDisplay.map( item => <Card { ...item } />)

  return (
    <div>
      { renderedCards }
    </div>
  )
}

export default CardContainer;