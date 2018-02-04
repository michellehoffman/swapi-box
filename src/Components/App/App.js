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
      ready: false,
      opening: null,
      people: null,
      planets: null,
      vehicles: null,
      favorites: [],
      current: null,
    }
  }

  componentDidMount() {
    this.loadFilmCrawl();
    setTimeout(this.setData(), 1000);
  }


  loadFilmCrawl = async () => {
    const filmArray = await getFilms();
    const opening = await this.getRandomFilm(filmArray);

    this.setState({ opening })
  }

  hideButton = (e) => {
    e.target.className = "hidden"
    this.setState({ ready: true })

    setTimeout(() => this.setState({ ready: false, opening: null }), 30000);
  }

  setData = async () => {
    const people = await getPeople();
    const planets = await getPlanets();
    const vehicles = await getVehicles();

    this.setState({
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

          <header>
            <h1>SWAPI-BOX</h1>
          </header>
          <button className="explore" onClick={ this.hideButton }>Explore</button>

        {
          this.state.opening && this.state.ready &&
          <OpeningCrawl { ...this.state.opening } />
        }
        
        {
          !this.state.opening && this.state.people && this.state.planets && this.state.vehicles &&
            <Controls favorites={ this.state.favorites }
                    dataToDisplay={ this.dataToDisplay } />
        }
        
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