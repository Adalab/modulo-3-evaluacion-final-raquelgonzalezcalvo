import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";

function CharacterDetail({ characterFind }) {
  return (
    <>
      <section className="CharacterSection">
        <div className="return">
          <Link to="/">Return</Link>
        </div>
        <section className="character">
          <article className="character__DetailItem">
            <img
              className="character__DetailItem-img"
              src={characterFind.image}
              alt="characterimage"
              title="character image"
            />
            <section className="charInfo">
              <h2 className="charInfo-h2">{characterFind.name}</h2>
              <h3 className="charInfo-h3">{characterFind.species}</h3>
              <h3 className="charInfo-h3">{characterFind.house}</h3>
              <h3 className="charInfo-h3">{characterFind.gender}</h3>
            </section>
          </article>
        </section>
      </section>
    </>
  );
}
export default CharacterDetail;
