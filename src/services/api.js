const getDataApi = () => {
  return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          image: eachCharacter.image,
          name: eachCharacter.name,
          specie: eachCharacter.species,
          gender: eachCharacter.gender,
          eyecolor: eachCharacter.eyeColour,
          ancestry: eachCharacter.ancestry,
        };
      });

      return cleanData;
    });
};
export default getDataApi;
