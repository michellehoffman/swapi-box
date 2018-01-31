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
      people: [],
      favorites: [],
      current: null
    }
  }

  componentDidMount() {
    this.getPeople();
  }
  
  getRandomFilm = array => {
    const max = array.length - 1;
    const randomNum = Math.floor(Math.random() * max);

    return array[randomNum];
  }

  getPeople = () => this.setState({ people: mockData.people.results });

  dataToDisplay = element => this.setState({ current: element });

  render() {
    return (
      <div className="app">
        <OpeningCrawl { ...(this.getRandomFilm(mockData.films.results))} />
        <Controls favorites={ this.state.favorites }
                  dataToDisplay={ this.dataToDisplay } />
        
        {
          this.state.current &&
          <CardContainer arrayToDisplay={ this.state[this.state.current] } />
        }
        
      </div>
    );
  }
}

export default App;