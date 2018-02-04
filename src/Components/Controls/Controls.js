import React from 'react';
import './Controls.css';

const Controls = ({ favorites, setCurrent, active }) => {
  const setClass = category => (
    category === active ? ' controls active' : 'controls'
  )

  const updateCurrent = (e) => {
    const value = e.target.innerText;
    const category = value.includes('favorites') ? 'favorites' : value

    setCurrent(category);
  }

  const numberOfFavorites =  favorites ? favorites.length : 0;

    return (
      <div>
        <div>
          <button className={ setClass('people') } 
                  onClick={ updateCurrent }>people</button>
          <button className={ setClass('planets') }
                  onClick={ updateCurrent }>planets</button>
          <button className={ setClass('vehicles') }
                  onClick={ updateCurrent }>vehicles</button>
        </div>
        <div>
          <button className={ setClass('favorites') }
                  id="favorites-button"
                  onClick={ updateCurrent }>
                  favorites 
                  <span id="num-faves">{ numberOfFavorites }</span>
          </button>
        </div>
      </div> 
    )
}

export default Controls;