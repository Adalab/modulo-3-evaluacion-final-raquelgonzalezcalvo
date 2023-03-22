const getDataApi = (filterHouse) => {
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${filterHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          specie: eachCharacter.species,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          eyecolor: eachCharacter.eyeColour,
          ancestry: eachCharacter.ancestry,
        };
      });

      return cleanData;
    });
};
export default getDataApi;
