import { Link } from "react-router-dom";

function Character({ eachCharacter }) {
  return (
    <li className="li">
      <Link to={`/character/${eachCharacter.id}`}>
        <img
          className="image-character"
          src={eachCharacter.image}
          alt="characterimage"
          title="character image"
        ></img>
        <h3>{eachCharacter.name}</h3>
        <h3>{eachCharacter.species}</h3>
        <h3>{eachCharacter.house}</h3>
        <h3>{eachCharacter.gender}</h3>
        <h3>{eachCharacter.ancestry}</h3>
      </Link>
    </li>
  );
}
export default Character;
