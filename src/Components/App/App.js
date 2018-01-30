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
      favorites: []
    }
  }
  
  getRandomFilm = array => {
    const max = array.length - 1;
    const randomNum = Math.floor(Math.random() * max);

    return array[randomNum];
  }

  render() {
    return (
      <div className="app">
        <OpeningCrawl { ...(this.getRandomFilm(mockData.films.results))} />
        <Controls favorites={ this.state.favorites } />
        <CardContainer />
      </div>
    );
  }
}

export default App;