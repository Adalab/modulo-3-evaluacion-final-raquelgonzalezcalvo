import "../styles/components/FilterName.scss";

function FilterName({ handleFilterName, filterName }) {
  const handleInput = (ev) => {
    ev.preventDefault();
    handleFilterName(ev.target.value);
  };

  return (
    <>
      <section className="form__names">
        <label htmlFor="form__names-label">Search by character:</label>
        <input
          className="form__names-input"
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
