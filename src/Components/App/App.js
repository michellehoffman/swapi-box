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

    this.setState({
      opening,
      people,
      planets
    })
  }
  
  getRandomFilm = array => {
    const max = array.length - 1;
    const randomNum = Math.floor(Math.random() * max);
    return array[randomNum];
  }

  dataToDisplay = element => this.setState({ current: element });

  currentArray = () => {
    const current = this.state.current;

    return this.state[current];
  }

  render() {
    return (
      <div className="app">
        <OpeningCrawl { ...this.state.opening } />
        <Controls favorites={ this.state.favorites }
                  dataToDisplay={ this.dataToDisplay } />
        
        {
          this.state.current &&
          <CardContainer arrayToDisplay={ this.currentArray() } 
                         type={this.state.current} />
        }
        
      </div>
    );
  }
}

export default App;