const url = 'https://swapi.co/api'


// FILMS


const cleanFilms = films => {
  return films.reduce(( acc, film ) => {
    const { title, opening_crawl, release_date } = film
    const cleanedFilm = {
      title,
      opening_crawl,
      release_date
    }

    acc = [...acc, cleanedFilm]

    return acc
  }, [])
}

export const getFilms = async () => {
  const response = await fetch(`${url}/films/`);
  const { results } = await response.json();
  const cleaned = cleanFilms(results);
  
  return cleaned
}


// VEHICLES



const cleanVehicles = vehicles => {
  return vehicles.reduce(( acc, vehicle ) => {
    const { name, model, vehicle_class, passengers } = vehicle;
    const cleanedVehicle = {
      name,
      model,
      vehicle_class,
      passengers,
      type: "vehicle",
      favorite: false
    }

    acc = [...acc, cleanedVehicle]

    return acc;
  },[])
}

export const getVehicles = async () => {
  const response = await fetch(`${url}/vehicles/`);
  const { results } = await response.json();
  const cleaned = cleanVehicles(results);

  return cleaned;
}


// PEOPLE



const cleanPeople = people => {
  return people.reduce(( acc, person ) => {
    const { name, homeworld, species } = person;
    const cleanedPerson = {
      name,
      homeworld,
      species,
      population: undefined,
      type: "people",
      favorite: false
    }

    acc = [...acc, cleanedPerson]

    return acc
  }, [])
}

export const getSpecies = async (person) => {
  const response = await fetch(person.species);
  const { name } = await response.json();
  
  return name
} 

export const getPeopleData = arrayOfPeople => {
  const unresolvedPromises = arrayOfPeople.map(async (person) => {
    const response = await fetch(person.homeworld);
    const { name, population } = await response.json();
    const homeworld = name
    const species = await getSpecies(person)
    
    return { ...person, homeworld, species, population }
  })
  return Promise.all(unresolvedPromises);
}

export const getPeople = async () => {
  const response = await fetch(`${url}/people/`);
  const { results } = await response.json();
  const cleaned = cleanPeople(results)
  const person = await getPeopleData(cleaned);

  return person;
}



// PLANETS



const cleanPlanets = planets => {
  return planets.reduce(( acc, planet ) => {
    const { name, terrain, population, climate, residents} = planet
    const cleanedPlanet = {
      name,
      terrain,
      population,
      climate,
      residents,
      type: "planets",
      favorite: false
    }

    acc = [...acc, cleanedPlanet]

    return acc
  },[])
}

export const getResidents = (array = [], newArray) => {
  const unresolvedResidents = array.map( async (resident) => {
      let response = await fetch(resident);
      let { name } = await response.json();
      let residents = { ...newArray, name };

      return residents
    })
  return Promise.all(unresolvedResidents)
}

const getPlanetData = planetsArray => {
  const unresolvedPromises = planetsArray.map( async (planet) => {
    let namesArray;
    let names = await getResidents(planet.residents, namesArray)
    let residents = [ ...names ].map( obj => obj.name )

    return { ...planet, residents }
  })
  return Promise.all(unresolvedPromises)
}

export const getPlanets = async () => {
  const response = await fetch(`${url}/planets/`);
  const { results } = await response.json();
  const cleaned = await cleanPlanets(results);
  const planets = await getPlanetData(cleaned);

  return planets
}