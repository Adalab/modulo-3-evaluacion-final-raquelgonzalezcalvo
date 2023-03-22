import { Link } from "react-router-dom";
function CharacterDetail({ characterFind }) {
  console.log(characterFind);
  return (
    <>
      <section className="detail">
        <h2>Detalle de contacto</h2>
        <div className="div">
          <img
            className="image__character"
            src={characterFind.image}
            alt="characterimage"
            title="character image"
          ></img>
          <h2>{characterFind.name}</h2>
          <h3>{characterFind.species}</h3>
          <h3>{characterFind.house}</h3>
          <h3>{characterFind.gender}</h3>
        </div>
        <Link to="/">Return</Link>
      </section>
    </>
  );
}
export default CharacterDetail;
