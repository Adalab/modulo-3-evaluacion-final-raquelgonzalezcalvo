function FilterName({ handleFilterName, filterName }) {
  const handleInput = (ev) => {
    ev.preventDefault();
    handleFilterName(ev.target.value);
  };

  return (
    <>
      <section className="character">
        <label htmlFor="character-filter">Search by character:</label>
        <input
          className="input-character"
          type="search"
          autoComplete="off"
          name="search"
          id="character-filter"
          value={filterName}
          onInput={handleInput}
        />
      </section>
    </>
  );
}
export default FilterName;
