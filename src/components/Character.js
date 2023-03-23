import { Link } from "react-router-dom";
import "../styles/components/Character.scss";

function Character({ eachCharacter }) {
  return (
    <li className="characters___Articles">
      <Link className="characters__Link" to={`/character/${eachCharacter.id}`}>
        <article className="characters___Articles___Item">
          <img
            className="characters___Articles___Item--img"
            src={eachCharacter.image}
            alt="characterimage"
            title="character image"
          />
          <h2 className="characters___Articles___Item--h2">
            {eachCharacter.name}
          </h2>
          <h3 className="characters___Articles___Item--h3">
            {eachCharacter.species}
          </h3>
          <h3 className="characters___Articles___Item--h3">
            {eachCharacter.house}
          </h3>
          <h3 className="characters___Articles___Item--h3">
            {eachCharacter.gender}
          </h3>
          <h3 className="characters___Articles___Item--h3">
            {eachCharacter.ancestry}
          </h3>
        </article>
      </Link>
    </li>
  );
}
export default Character;
