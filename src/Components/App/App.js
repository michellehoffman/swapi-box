import React, { Component } from 'react';
import './App.css';
import mockData from '../../mockData/mockData';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';

class App extends Component {
  getRandomFilm = array => {
    const max = array.length - 1;
    const randomNum = Math.floor(Math.random() * max);

    return array[randomNum];
  }

  render() {
    return (
      <div className="app">
        <OpeningCrawl { ...(this.getRandomFilm(mockData.films.results))} />
      </div>
    );
  }
}

export default App;