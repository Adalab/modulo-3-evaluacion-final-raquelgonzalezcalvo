import Character from "./Character";

function ListCharacter({ characterList, filterName }) {
  let errorMsg;
  characterList.length !== 0
    ? (errorMsg = "")
    : (errorMsg = `No existe el personaje ${filterName}`);
  //pintar nuestro li del componente Character
  const Element = characterList.map((eachCharacter) => {
    return <Character key={eachCharacter.id} eachCharacter={eachCharacter} />;
  });
  return (
    <section className="ul">
      <p>{errorMsg}</p>
      <ul className="cards">{Element}</ul>
    </section>
  );
}
export default ListCharacter;
