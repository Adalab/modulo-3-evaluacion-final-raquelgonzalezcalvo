/* SECCIÓN DE IMPORT */
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import ListCharacter from "./ListCharacter";
import reset from "../styles/core/reset.scss";
import CharacterDetail from "./CharacterDetail";
import "../styles/App.scss";
import Filters from "./Filters";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";

/* VARIABLES ESTADO (DATOS) */
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  /* useEffect */
  useEffect(() => {
    getDataApi(filterHouse).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [filterHouse]);

  /* FUNCIONES HANDLER */
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

  const contactFiltered = characterList.filter((eachCharacter) => {
    if (filterHouse === "Gryffindor") {
      return true;
    } else {
      return filterHouse === eachCharacter.house;
    }
  });

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:id", pathname);
  console.log(pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;

  const characterFind = contactFiltered.find(
    (eachCharacter) => eachCharacter.id === characterId
  );
  console.log(dataUrl);

  /* HTML */
  return (
    <>
      <header>
        <h1 className="title">Harry Potter</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterName={handleFilterName}
                  handleFilterHouse={handleFilterHouse}
                  filterName={filterName}
                  filterHouse={filterHouse}
                />
                <ListCharacter characterList={searchCharacter}></ListCharacter>
              </>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={<CharacterDetail characterFind={characterFind} />}
          />
        </Routes>
      </main>
    </>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
