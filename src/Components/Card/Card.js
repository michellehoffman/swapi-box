import React from 'react';
import './Card.css';
import starInactive from '../../images/starInactive.svg';
import starActive from '../../images/starActive.svg';

const Card = ({ item, addFavorite }) => {
  const details = { ...item } 
  const { name } = details;
  const setFavoriteBtn = (item.favorite === "true") ? starActive : starInactive;

  const cleanKeys = keys => {
    return keys.filter( key => {
      return key !== "name" && key !== "type" && key !== "favorite";
    })
  }

  const renderedDetails = () =>{
    const keys = Object.keys(item);
    let residentKey = keys.find( key => key === 'residents');
    
    if(residentKey && item.residents.length > 0) {
      const list = item.residents.map( resident => <li>{resident}</li>)

      item.residents = (
        <div className="residents">
          <ul>
            {list}
          </ul>
        </div>
      )
    } 

    const cleanedKeys = cleanKeys(keys)
    
    return cleanedKeys.map( detail => {
      return (
        <div>
          <h4 className="character-detail">{ detail }</h4>  
          <p>{ item[detail] }</p>
        </div>
      )
    })
  }

  const addFavoriteCard = e => {
    addFavorite(item);
  }

  return (
    <div className="card">
      <img src={ setFavoriteBtn } className="favorite-button" onClick={ addFavoriteCard } />
      <h2>{ name }</h2>
      { renderedDetails() }
    </div>
  )
}

export default Card;