import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;

  it('should match snapshot for type: people', () => {
    const person = {
      "name": "Luke Skywalker",
      "homeworld": "https://swapi.co/api/planets/1/",
      "species": [
        "https://swapi.co/api/species/1/"
      ]
    }
    const addFavorite = jest.fn();
    wrapper = shallow(<Card item={ person }
                            type="person"
                            addFavorite={ addFavorite } />)
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for type: planet', () => {
    const planet = {
      "name": "Alderaan",
      "terrain": "grasslands, mountains", 
      "climate": "temperate", 
      "population": "2000000000", 
      "residents": [
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/68/", 
        "https://swapi.co/api/people/81/"
      ]
    }
    const addFavorite = jest.fn();
    wrapper = shallow(<Card item={ planet }
                            type="planet"
                            addFavorite={ addFavorite } />)
    
    expect(wrapper).toMatchSnapshot();    
  });

  it('should match snapshot for type: vehicle', () => {
    const vehicle = {
      "name": "Sand Crawler", 
      "model": "Digger Crawler", 
      "vehicle_class": "wheeled", 
      "passengers": "30"
    }
    const addFavorite = jest.fn();
    wrapper = shallow(<Card item={ vehicle }
                            type="vehicle"
                            addFavorite={ addFavorite } />)
    
    expect(wrapper).toMatchSnapshot();        
  })
})