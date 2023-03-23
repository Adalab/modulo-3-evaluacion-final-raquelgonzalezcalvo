import Character from "./Character";
import "../styles/components/ListCharacter.scss";

function ListCharacter({ characterList, filterName }) {
  let errorMsg;
  characterList.length !== 0
    ? (errorMsg = "")
    : (errorMsg = `There is no character ${filterName}`);
  //pintar nuestro li del componente Character
  const Element = characterList.map((eachCharacter) => {
    return <Character key={eachCharacter.id} eachCharacter={eachCharacter} />;
  });
  return (
    <section className="characters">
      <p className="characters__error">{errorMsg}</p>
      <ul className="characters__List">{Element}</ul>
    </section>
  );
}
export default ListCharacter;
