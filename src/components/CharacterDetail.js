function CharacterDetail(characterFind) {
  return (
    <>
      <h2>Detalle de contacto</h2>
      <div className="div">
        <img
          className="image__character"
          src={characterFind.image}
          alt="Foto del personaje"
          title="Foto del personaje"
        ></img>
        <h3>{characterFind.name}</h3>
        <h3>{characterFind.species}</h3>
        <h3>{characterFind.house}</h3>
        <h3>{characterFind.gender}</h3>
        <h3>{characterFind.eyeColour}</h3>
        <h3>{characterFind.ancestry}</h3>
      </div>
    </>
  );
}
export default CharacterDetail;
