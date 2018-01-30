import React from 'react';
import './Controls.css';

const Controls = ({ favorites, dataToDisplay }) => {
  const getElement = e => {
    const element = e.target.innerText;
    dataToDisplay(element);
  }

  const num = favorites ? favorites.length : 0

  return (
    <div>
      <div>
        <button onClick={ getElement }>people</button>
        <button onClick={ getElement }>planets</button>
        <button onClick={ getElement }>vehicles</button>
      </div>
      <div>
        <button>favorites <span>{ num }</span></button>
      </div>
    </div> 
  )
}

export default Controls;