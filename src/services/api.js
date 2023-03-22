const getDataApi = (filterHouse) => {
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${filterHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          image:
            eachCharacter.image ||
            `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          ancestry: eachCharacter.ancestry,
        };
      });

      return cleanData;
    });
};
export default getDataApi;
