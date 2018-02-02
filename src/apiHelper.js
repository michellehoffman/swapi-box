const url = 'https://swapi.co/api'

export const getFilms = async () => {
  const response = await fetch(`${url}/films/`);
  const result = await response.json();
  const films = result.results;
  const cleaned = cleanFilms(films);

  return cleaned
}

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

export const getVehicles = async () => {
  const response = await fetch(`${url}/vehicles/`);
  const result = await response.json();
  const vehicles = result.results;
  const cleaned = cleanVehicles(vehicles);

  return cleaned;
}

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

export const getPeople = async () => {
  const response = await fetch(`${url}/people/`);
  const { results } = await response.json();
  const cleaned = cleanPeople(results)
  const person = await getData(cleaned, "homeworld");

  return person;
}

const cleanPeople = people => {
  return people.reduce(( acc, person ) => {
    const { name, homeworld, species, population } = person;
    const cleanedPerson = {
      name,
      homeworld,
      species,
      population,
      type: "people",
      favorite: false
    }

    acc = [...acc, cleanedPerson]

    return acc
  }, [])
}

const getData = arrayOfPeople => {
  const unresolvedPromises = arrayOfPeople.map(async (person) => {
    let response = await fetch(person.homeworld);
    let world = await response.json();
    let homeworld = world.name;
    let population = world.population;
    let species = await getSpecies(person);
    
    return {...person, homeworld, species, population}
  })
  return Promise.all(unresolvedPromises);
}

const getSpecies = async (person) => {
  let response = await fetch(person.species);
  let { name } = await response.json();
  let data = name;

  return data;
}





// async componentDidMount () {
//     const initialFetch = await fetch('http://localhost:3001/api/frontend-staff')
//     const { bio } = await initialFetch.json()
//     const staff = await this.fetchBios(bio)
//     this.setState({ staff })
//   }

//   fetchBios(arrayOfBios) {
//     const unresolvedPromises = arrayOfBios.map(async (staffMember) => {
//       let initialFetch = await fetch(staffMember.info)
//       let bio = await initialFetch.json()
//       return {...staffMember, ...bio}
//     })
//     return Promise.all(unresolvedPromises)
//   }



// NOT WORKING PLANETS

export const getPlanets = async () => {
  const response = await fetch(`${url}/planets/`);
  const { results } = await response.json();
  // const residents = getPlanetsHelper(results);

  return results;
}

// const getPlanetsHelper = planetsArray => {
//   const unresolvedPromises = planetsArray.map( planet => {
//     const unresolvedResidents = planet.residents.map(async (resident) => {
//       let initialFetch = await fetch(resident);
//       let person = initialFetch.json()

//       return { ...person, ...planetsArray}
//     })
//     return Promise.all(unresolvedResidents);
//   })
//   return Promise.all(unresolvedPromises);
// }


