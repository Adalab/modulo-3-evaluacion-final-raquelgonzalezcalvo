import FilterHouse from "./filterHouse";
import FilterName from "./FilterName";
import "../styles/components/Filters.scss";

function Filters({
  handleFilterName,
  handleFilterHouse,
  filterName,
  filterHouse,
}) {
  return (
    <section className="filter">
      <form>
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
  );
}
export default Filters;
