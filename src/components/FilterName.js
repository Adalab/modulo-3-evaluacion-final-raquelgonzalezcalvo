function FilterName(props) {
  const handleFilterName = (ev) => props.handleFilterName(ev.target.value);

  return (
    <>
      <label htmlFor="character-filter">Buscar por personaje</label>
      <input
        className="input-character"
        type="text"
        name="character-filter"
        id="character-filter"
        value={props.name}
        onInput={handleFilterName}
      />
    </>
  );
}
export default FilterName;
