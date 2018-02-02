import React from 'react';
import './Card.css';

const Card = ({ item, addFavorite }) => {
  const details = { ...item } 
  const { name } = details;
  const setClass = (item.favorite === "true") ? "active" : "inactive";

  const cleanKeys = keys => {
    return keys.filter( key => {
      return key !== "name" && key !== "type" && key !== "favorite";
    })
  }

  const renderedDetails = () =>{
    const keys = Object.keys(item);
    let residentKey = keys.find( key => key === 'residents');
    
    if(residentKey && item.residents.length) {
      const list = item.residents.map( resident => <li>{resident}</li>)

      item.residents = (
        <div>
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
        <li>{ detail }: { item[detail] }</li>
        </div>
      )
    })
  }

  const addFavoriteCard = e => {
    addFavorite(item);
  }

  return (
    <div>
      <h2>{ name }</h2>
      <ul>
        { renderedDetails() }
      </ul>
      <button className={ setClass } onClick={ addFavoriteCard }>+</button>
    </div>
  )
}

export default Card;