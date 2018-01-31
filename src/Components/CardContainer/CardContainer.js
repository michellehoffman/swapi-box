import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ arrayToDisplay, type }) => {
  const renderedCards = arrayToDisplay.map( item => <Card item={ item } type={ type }/>)

  return (
    <div>
      { renderedCards }
    </div>
  )
}

export default CardContainer;