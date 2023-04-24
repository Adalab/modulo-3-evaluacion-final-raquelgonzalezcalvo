import harrypotter from "../images/harrypotter.jpg";
const getDataApi = (filterHouse) => {
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${filterHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          image: eachCharacter.image || harrypotter,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
        };
      });

      return cleanData;
    });
};
export default getDataApi;
