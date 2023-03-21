/* SECCIÓN DE IMPORT */
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import ListCharacter from "./ListCharacter";
import reset from "../styles/core/reset.scss";
import "../styles/App.scss";

import Filters from "./Filters";
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  /* VARIABLES ESTADO (DATOS) */
  /* EFECTOS (día 5) */
  useEffect(() => {
    getDataApi().then((cleanData) => {
      console.log(cleanData);
      setCharacterList(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };

  const searchCharacter = characterList.filter((eachCharacter) => {
    return eachCharacter.name
      .toLocaleLowerCase()
      .includes(filterName.toLocaleLowerCase());
  });

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <>
      <header>
        <h1 className="title">Harry Potter</h1>
      </header>
      <main>
        <Filters
          handleFilterName={handleFilterName}
          handleFilterHouse={handleFilterHouse}
          filterName={filterName}
          filterHouse={filterHouse}
        />
        <ListCharacter characterList={searchCharacter}></ListCharacter>
      </main>
    </>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
