const FilterHouse = ({ handleFilterHouse, filterHouse }) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    handleFilterHouse(ev.target.value);
  };
  return (
    <>
      <label className="houses__label" htmlFor="houses">
        Selecciona una casa
        <select
          className="houses__select"
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
      </label>
    </>
  );
};
export default FilterHouse;
