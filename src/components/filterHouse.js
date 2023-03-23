import "../styles/components/FilterHouse.scss";

const FilterHouse = ({ handleFilterHouse, filterHouse }) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    handleFilterHouse(ev.target.value);
  };
  return (
    <section className="form__houses">
      <label className="form__houses-label" htmlFor="houses">
        Select a house:
      </label>
      <select
        className="form__houses-select"
        name="houses"
        id="houses"
        onInput={handleInput}
        value={filterHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </section>
  );
};
export default FilterHouse;
