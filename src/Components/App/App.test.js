import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockData from '../../mockData/mockData';
import App from './App';
import * as api from '../../apiHelper';

window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({
      crawl: films
    })
  })
})

const mockFilms = mockData.films.results;
const mockPeople = mockData.people.results;
const mockPlanets = mockData.planets.results;
const mockVehicles = mockData.vehicles.results;

const cleanedPlanets = [{
  name: "Alderaan",
  terrain: "grasslands, mountains",
  population:  "2000000000",
  climate: "temperate",
  residents: [
    "https://swapi.co/api/people/5/", 
    "https://swapi.co/api/people/68/", 
    "https://swapi.co/api/people/81/"
  ],
  type: "planets",
  favorite: false
}]

const mockPlanetsData = [{
  name: "Alderaan",
  terrain: "grasslands, mountains",
  population:  "2000000000",
  climate: "temperate",
  residents: [
    "Leia Organa",
    "Luke Skywalker",
    "someone else"
  ],
  type: "planets",
  favorite: false
}]

const cleanedPeople = [{
  name: "Luke Skywalker",
  homeworld: "https://swapi.co/api/planets/1/",
  species: "https://swapi.co/api/species/1/",
  population: undefined,
  type: "people",
  favorite: false
}]

const peopleWithHomeworld = [{
  name: "Luke Skywalker",
  homeworld: "Somewhere",
  species: "https://swapi.co/api/species/1/",
  population: 20000,
  type: "people",
  favorite: false  
}]

const peopleWithSpecies = [{
  name: "Luke Skywalker",
  homeworld: "Somewhere",
  species: "Human",
  population: 20000,
  type: "people",
  favorite: false 
}]

api.getFilms = () => api.cleanFilms(mockFilms);
api.getPeople = () => api.cleanPeople(mockPeople);
api.cleanPeople = () => api.getPeopleData(cleanedPeople) 
api.getPeopleData = () => api.getSpecies(peopleWithHomeworld);
api.getSpecies = () => (peopleWithSpecies);
api.getPlanets = () => api.cleanPlanets(mockPlanets);
api.cleanPlanets = () => api.getPlanetData(cleanedPlanets);
api.getPlanetData = () => api.getResidents(cleanedPlanets.residents, []);
api.getResidents = () => (mockPlanetsData);
api.getVehicles = () => api.cleanVehicles(mockVehicles);


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set state of current to the correct element', () => {
    wrapper.instance().setCurrent('people');

    expect(wrapper.state('current')).toEqual('people');
  });

  it('should render an OpeningCrawl component', () => {
    wrapper.update()

    expect(wrapper.find('OpeningCrawl').length).toEqual(1);
  });

  it('should select a random film to pass to OpeningCrawl component', () => {
    const crawlData = mockData.films.results;
    const expected = crawlData[0];

    expect(wrapper.instance().getRandomFilm(crawlData)).toEqual(expected);
  });

  it('should set the state of people', () => {
    wrapper.update();

    expect(wrapper.state('people')).toEqual(peopleWithSpecies);
  })

  it('should set the state of planets', () => {
    wrapper.update();

    expect(wrapper.state('planets')).toEqual(mockPlanetsData);
  });

  it('should set the state of vehicles', () => {
    const cleanedVehicles = [{
      name: "Sand Crawler",
      model: "Digger Crawler",
      vehicle_class: "wheeled",
      passengers: "30",
      type: "vehicle",
      favorite: false
    }]

    wrapper.update();

    expect(wrapper.state('vehicles')).toEqual(cleanedVehicles);
  });

  it('should set the state of favorites', () => {
    const person = {
      "name": "Michelle",
      "job": "student"
    }

    wrapper.instance().addFavorite(person);

    expect(wrapper.state('favorites')).toEqual([person]);
  });

  it('should remove card from favorites if button is clicked again', () => {
    const person = {
      "name": "Michelle",
      "job": "student"
    }

    wrapper.instance().addFavorite(person);
    wrapper.instance().addFavorite(person);

    expect(wrapper.state('favorites')).toEqual([])    
  })
});

