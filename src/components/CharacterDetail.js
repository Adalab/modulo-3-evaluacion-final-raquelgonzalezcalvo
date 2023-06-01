import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";

function CharacterDetail({ characterFind }) {
  return (
    <>
      <section className="container">
        <section className="container__characterSection">
          <div className="container__characterSection-back">
            <Link to="/list">
              <button className="button">
                GO BACK <i class="fa-sharp fa-solid fa-wand-sparkles"></i>
              </button>
            </Link>
          </div>
          <section className="container__character">
            <article className="character__DetailItem">
              <img
                className="character__DetailItem-img"
                src={characterFind.image}
                alt="characterimage"
                title="character image"
              />
              <section className="charInfo">
                <h3 className="charInfo-h2">Name: {characterFind.name}</h3>
                <h3 className="charInfo-h3">Specie: {characterFind.species}</h3>
                <h3 className="charInfo-h3">House: {characterFind.house}</h3>
                <h3 className="charInfo-h3">Gender: {characterFind.gender}</h3>
              </section>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
export default CharacterDetail;
