function CharacterDetail() {
  return (
    <>
      <h2>Detalle de contacto</h2>
      <div className="div">
        <img
          className="image__character"
          src={eachCharacter.image}
          alt="Foto del personaje"
          title="Foto del personaje"
        ></img>
        <h3>{eachCharacter.name}</h3>
        <h3>{eachCharacter.species}</h3>
        <h3>{eachCharacter.house}</h3>
        <h3>{eachCharacter.gender}</h3>
        <h3>{eachCharacter.eyeColour}</h3>
        <h3>{eachCharacter.ancestry}</h3>
      </div>
    </>
  );
}
