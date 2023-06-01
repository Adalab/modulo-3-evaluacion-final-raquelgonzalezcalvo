import FilterHouse from "./filterHouse";
import FilterName from "./FilterName";
import "../styles/components/Filters.scss";
import home from "../images/home2.png";
import { Link } from "react-router-dom";

function Filters({
  handleFilterName,
  handleFilterHouse,
  filterName,
  filterHouse,
}) {
  return (
    <>
      <header className="header"></header>

      <section className="filter">
        <form>
          <Link to={"/"} className="filter__link">
            <img src={home} alt="glasses" className="filter__img" />
          </Link>
          <FilterName
            handleFilterName={handleFilterName}
            filterName={filterName}
          />
          <FilterHouse
            handleFilterHouse={handleFilterHouse}
            filterHouse={filterHouse}
          />
        </form>
      </section>
    </>
  );
}
export default Filters;
