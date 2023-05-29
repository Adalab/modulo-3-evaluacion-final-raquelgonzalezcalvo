import { Link } from "react-router-dom";
import "../styles/components/Landing.scss";
import characters from "../images/enter.png";

function Landing() {
  return (
    <div className="landing">
      <Link to={"/list"} className="landing__title">
        <button className="landing__btn">
          Magic <i class="fa-sharp fa-solid fa-wand-sparkles"></i>
        </button>
      </Link>
      <img src={characters} alt="characters" className="landing__characters" />
    </div>
  );
}

export default Landing;
