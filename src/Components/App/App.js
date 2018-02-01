import React, { Component } from 'react';
import './App.css';
import mockData from '../../mockData/mockData';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import Controls from '../Controls/Controls';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      opening: null,
      people: [],
      planets: [],
      favorites: [],
      current: null
    }
  }

  componentDidMount() {
    this.setData()
  }

  setData = () => {
    const opening = this.getRandomFilm(mockData.films.results);
    const people = mockData.people.results;
    const planets = mockData.planets.results;
    const vehicles = mockData.vehicles.results;

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


  addFavorite = card => {
    const favorites = this.state.favorites;
    const match = favorites.find( item => item === card );
    const remainingCards = this.removeFavorite(favorites, card);  

    card.favorite = match ? "false" : "true"

    const updatedFavorites = match ? remainingCards : [ ...favorites, card ];

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
                         addFavorite={this.addFavorite} />
        }
        
      </div>
    );
  }
}

export default App;