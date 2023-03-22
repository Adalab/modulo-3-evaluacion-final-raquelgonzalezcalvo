const FilterHouse = ({ handleFilterHouse, filterHouse }) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    handleFilterHouse(ev.target.value);
  };
  return (
    <>
      <label className="houses" htmlFor="houses">
        Select a house:
      </label>
      <select
        className="houses-select"
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
    </>
  );
};
export default FilterHouse;
