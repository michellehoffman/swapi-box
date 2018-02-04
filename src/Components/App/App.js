import React, { Component } from 'react';
import { getFilms, getPeople, getPlanets, getVehicles } from '../../apiHelper.js';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import Controls from '../Controls/Controls';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      current: null,
      favorites: [],
      intro: true,
      crawl: null,
      people: null,
      planets: null,
      vehicles: null,
    }
  }

  componentDidMount() {
    this.loadFilmCrawl();
    setTimeout(this.setData(), 500)
  }

  getRandomFilm = array => {
    const max = array.length - 1;
    const randomNum = Math.floor(Math.random() * max);
    
    return array[randomNum];
  }

  loadFilmCrawl = async () => {
    const filmArray = await getFilms();
    const crawl = await this.getRandomFilm(filmArray);

    this.setState({ crawl });
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

  skipIntro = () => this.setState({ intro: false })
  
  setCurrent = category => this.setState({ current: category });

  currentArray = () => this.state[this.state.current];

  removeFavorite = (array, card) => array.filter( item => item !== card );

  updateFavorites = (favorites, card) => {
    const match = favorites.find( item => item === card );
    card.favorite = match ? "false" : "true"

    return match ? this.removeFavorite(favorites, card) : [ ...favorites, card ];
  }

  addFavorite = card => {
    const favorites = this.state.favorites;
    const updatedFavorites = this.updateFavorites(favorites, card);    

    this.setState({ favorites: updatedFavorites });
  }


  render() {
    return (
      <div className="app">
        <header>
          <h1>SWAPI-BOX</h1>
        </header>

        {
          this.state.intro && this.state.crawl &&
          <OpeningCrawl className="opening"{ ...this.state.crawl } />
        }

        {
          this.state.intro && this.state.people && 
          <button className="next" onClick={ this.skipIntro }>NEXT</button>
        }
        
        {
          !this.state.intro &&
          <Controls favorites={ this.state.favorites }
                    setCurrent={ this.setCurrent }
                    active={ this.state.current } />
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