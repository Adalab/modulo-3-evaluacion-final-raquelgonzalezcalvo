function FilterName({ handleFilterName, filterName }) {
  const handleInput = (ev) => {
    ev.preventDefault();
    handleFilterName(ev.target.value);
  };

  return (
    <>
      <label htmlFor="character-filter">Buscar por personaje</label>
      <input
        className="input-character"
        type="search"
        autoComplete="off"
        name="search"
        id="character-filter"
        value={filterName}
        onInput={handleInput}
      />
    </>
  );
}
export default FilterName;
