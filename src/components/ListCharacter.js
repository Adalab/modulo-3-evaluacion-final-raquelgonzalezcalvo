import Character from "./Character";

function ListCharacter({ characterList }) {
  //pintar nuestro li del componente Character
  const Element = characterList.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} />;
  });
  return (
    <section className="ul">
      <ul className="cards">{Element}</ul>
    </section>
  );
}
export default ListCharacter;
