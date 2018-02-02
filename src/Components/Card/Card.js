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
    const cleanedKeys = cleanKeys(keys)
    
    return cleanedKeys.map( detail => {
      return <li>{ detail }: { item[detail] }</li>
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