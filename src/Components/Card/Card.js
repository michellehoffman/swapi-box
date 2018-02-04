import React from 'react';
import starInactive from '../../images/starInactive.svg';
import starActive from '../../images/starActive.svg';
import './Card.css';

const Card = ({ item, addFavorite }) => {
  const favoriteBtn = (item.favorite === "true") ? starActive : starInactive;
  const { name } = { ...item } 

  const cleanKeys = keys => {
    return keys.filter( key => (
      key !== "name"
      && key !== "type"
      && key !== "favorite" 
      && key !== "residents"
    ))
  }

  const renderDetails = () =>{
    const keys = Object.keys(item);
    const cleanedKeys = cleanKeys(keys);
  
    return cleanedKeys.map( detail => {
      return (
        <div>
          <h4 className="character-detail">{ detail }</h4>  
          <p>{ item[detail] }</p>
        </div>
      )
    })
  }

  const renderResidents = () => {
    if(item.residents) {
      const residentList = item.residents.map( resident => 
        <li key={ Date.now() + resident }>{ resident }</li>
      )

      return (
        <div>
          <h4 className="character-detail">Residents</h4>
          <ul className="residents">
            { residentList }
          </ul>
        </div>
      )
    } 
  }

  const addFavoriteCard = e => {
    addFavorite(item);
  }
  
  return (
    <div className="card">
      <img src={ favoriteBtn } 
           alt="add favorite"
           className="favorite-button"
           onClick={ addFavoriteCard } />
      <h2>{ name }</h2>
      { renderDetails() }
      { renderResidents() }
    </div>
  )
}

export default Card;