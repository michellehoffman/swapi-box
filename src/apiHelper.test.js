import React from 'react';
import ReactDOM from 'react-dom';
import { getFilms, getVehicles, getPeople, getPeopleData, getSpecies, getResidents, getPlanets } from './apiHelper';

describe('getFilms', () => {

  beforeEach(() => {
    const mockFilms = [
      {
        title: "The Last Jedi",
        opening_crawl: "blah, blah, blah...",
        release_date: "2016-03-68"
      },
      {
        title: "A New Hope",
        opening_crawl: "kajg;lakslkghjlakmlkd",
        release_date: "1995-05-19"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockFilms
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    getFilms();

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
  });

  it('should return an array of films', () => {
    const mockFilms = [
      {
        title: "The Last Jedi",
        opening_crawl: "blah, blah, blah...",
        release_date: "2016-03-68"
      },
      {
        title: "A New Hope",
        opening_crawl: "kajg;lakslkghjlakmlkd",
        release_date: "1995-05-19"
      }
    ];

    expect(getFilms()).resolves.toEqual(mockFilms);
  }); 

});

describe('getVehicles', () => {

  beforeEach(() => {
    const mockVehicles = [
      {
        name: "Sand Crawler",
        model: "something",
        vehicle_class: "dune buggy",
        passengers: 3,
        type: "vehicle",
        favorite: false
      },
      {
        name: "Something else",
        model: "something",
        vehicle_class: "spaceship",
        passengers: 300,
        type: "vehicle",
        favorite: false
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockVehicles
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    getVehicles();

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/vehicles/');
  });

  it('should return an array of vehicles', () => {
    const mockVehicles = [
      {
        name: "Sand Crawler",
        model: "something",
        vehicle_class: "dune buggy",
        passengers: 3,
        type: "vehicle",
        favorite: false
      },
      {
        name: "Something else",
        model: "something",
        vehicle_class: "spaceship",
        passengers: 300,
        type: "vehicle",
        favorite: false
      }
    ];

    expect(getVehicles()).resolves.toEqual(mockVehicles);
  }); 

});

describe('getSpecies', () => {

  beforeEach(() => {
    const mockPerson = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: "https://swapi.co/api/species/1/",
      population: 30000,
      type: "people",
      favorite: false
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        name: 'human'
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    const mockPerson = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: "https://swapi.co/api/species/1/",
      population: 30000,
      type: "people",
      favorite: false
    }

    getSpecies(mockPerson);

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/species/1/');
  });

  it('should return an array of people', () => {
    const mockPerson = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: "https://swapi.co/api/species/1/",
      population: 30000,
      type: "people",
      favorite: false
    }

    expect(getSpecies(mockPerson)).resolves.toEqual('human');
  });

});

describe('getPeopleData', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        name: "Somewhere",
        population: 30000
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    const mockPeople = [
      {
        name: "Luke Skywalker",
        homeworld: "https://swapi.co/api/planets/1/",
        species: "https://swapi.co/api/species/1/",
        population: undefined,
        type: "people",
        favorite: false
      }
    ]

    getPeopleData(mockPeople);

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/1/');
  });

  it('should return a mock person with homeworld data', () => {
    const mockPeople = [
      {
        name: "Luke Skywalker",
        homeworld: "https://swapi.co/api/planets/1/",
        species: "https://swapi.co/api/species/1/",
        population: undefined,
        type: "people",
        favorite: false,
      }
    ]
    const expected = [
      {
        name: "Luke Skywalker",
        homeworld: "Somewhere",
        species: "Somewhere",
        population: 30000,
        type: "people",
        favorite: false,
      }
    ]

    expect(getPeopleData(mockPeople)).resolves.toEqual(expected);
  });

});

describe('getPeople', () => {

  beforeEach(() => {
    const mockPeople = [
      {
        name: "Luke Skywalker",
        homeworld: "https://swapi.co/api/planets/1/",
        species: "https://swapi.co/api/species/1/",
        population: undefined,
        type: "people",
        favorite: false
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPeople
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    getPeople();

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/');
  });

  it('should return an array of people', () => {
    const mockPeople = [
      {
        name: "Luke Skywalker",
        homeworld: undefined,
        species: undefined,
        population: undefined,
        type: "people",
        favorite: false
      }
    ]

    expect(getPeople()).resolves.toEqual(mockPeople);
  });

});

describe('getResidents', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        name: "Leia Organa"
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    const mockResidents = ["https://swapi.co/api/people/1/"]

    getResidents(mockResidents, []);

    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/1/");
  });

  it('should return an array of resident names', () => {
    const mockResidents = ["https://swapi.co/api/people/1/"]

    expect(getResidents(mockResidents, [])).resolves.toEqual([{name: "Leia Organa"}]);
  });

});

describe('getPlanets', () => {

  beforeEach(() => {
    const mockPlanets = [{
      name: "Tatooine",
      terrain: "desert",
      population: 3000,
      climate: "arid desert",
      residents: undefined,
      type: "planets",
      favorite: false
    }]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPlanets 
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    getPlanets();

    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/planets/");
  });

  it('should return an array of resident names', () => {
    const mockPlanets = [{
      name: "Tatooine",
      terrain: "desert",
      population: 3000,
      climate: "arid desert",
      residents: [],
      type: "planets",
      favorite: false
    }]

    expect(getPlanets()).resolves.toEqual(mockPlanets);
  });

});