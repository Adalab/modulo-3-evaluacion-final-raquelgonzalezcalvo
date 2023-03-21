const FilterHouse = ({ handleSelectHouse, }) => {
  const handleInput = (ev) => {
    
  };
  return (
    <label htmlFor="houses">
      Selecciona una casa
      <select
        name="houses"
        id="houses"
        onInput={}
        value={}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
};
export default FilterHouse;
