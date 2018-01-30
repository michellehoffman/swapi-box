import React from 'react';
import './Controls.css';

const Controls = (favorites) => {
  const num = favorites.length || 0;

  return (
    <div>
      <div>
        <button>people</button>
        <button>planets</button>
        <button>vehicles</button>
      </div>
      <div>
        <button>favorites <span>{num}</span></button>
      </div>
    </div> 
  )
}

export default Controls;