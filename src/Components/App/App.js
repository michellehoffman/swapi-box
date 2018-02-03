import React, { Component } from 'react';
import './App.css';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import Controls from '../Controls/Controls';
import CardContainer from '../CardContainer/CardContainer';
import { getFilms, getPeople, getPlanets, getVehicles } from '../../apiHelper.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      opening: null,
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      current: null
    }
  }

  componentDidMount() {
    // this.setData();
  }

  setData = async() => {
    const filmArray = await getFilms();
    const opening = await this.getRandomFilm(filmArray);
    const people = await getPeople();
    const planets = await getPlanets();
    const vehicles = await getVehicles();

    this.setState({
      opening,
      people,
      planets,
      vehicles
    })
  }
  
  getRandomFilm = array => {
    const max = array.length - 1;
    const randomNum = Math.floor(Math.random() * max);
    return array[randomNum];
  }

  dataToDisplay = element => this.setState({ current: element })

  currentArray = () => {
    const current = this.state.current;

    return this.state[current];
  }

  updateFavorites = (favorites, card) => {
    const match = favorites.find( item => item === card );
    
    card.favorite = match ? "false" : "true"
    
    const remainingCards = this.removeFavorite(favorites, card);
    
    return match ? remainingCards : [ ...favorites, card ];
  }

  addFavorite = card => {
    const favorites = this.state.favorites;
    const updatedFavorites = this.updateFavorites(favorites, card);    

    this.setState({ favorites: updatedFavorites });
  }

  removeFavorite = (array, card) => array.filter( item => item !== card )

  render() {
    return (
      <div className="app">
        <OpeningCrawl { ...this.state.opening } />
        <Controls favorites={ this.state.favorites }
                  dataToDisplay={ this.dataToDisplay } />
        
        {
          this.state.current &&
          <CardContainer arrayToDisplay={ this.currentArray() } 
                         addFavorite={ this.addFavorite } />
        }
        
      </div>
    );
  }
}

export default App;