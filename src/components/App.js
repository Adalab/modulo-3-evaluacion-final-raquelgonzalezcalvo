/* Styles */
import "../styles/App.scss";
/* HOOKS */
import { useEffect, useState } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
/* SECCIÓN DE IMPORT */
import getDataApi from "../services/api";
import ListCharacter from "./ListCharacter";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Landing from "./Landing";

/* VARIABLES ESTADO (DATOS) */
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  /* USEEFFECT */
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

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  //filter name
  const searchCharacter = characterList.filter((eachCharacter) => {
    return eachCharacter.name
      .toLocaleLowerCase()
      .includes(filterName.toLocaleLowerCase());
  });
  //filter house
  const contactFiltered = characterList.filter((eachCharacter) => {
    if (filterHouse === "Gryffindor") {
      return true;
    } else {
      return filterHouse === eachCharacter.house;
    }
  });

  /* ROUTES */
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:id", pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = contactFiltered.find(
    (eachCharacter) => eachCharacter.id === characterId
  );

  /* HTML */
  return (
    <>
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/list"
            element={
              <>
                <Filters
                  handleFilterName={handleFilterName}
                  handleFilterHouse={handleFilterHouse}
                  filterName={filterName}
                  filterHouse={filterHouse}
                />
                <ListCharacter
                  characterList={searchCharacter}
                  filterName={filterName}
                ></ListCharacter>
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

export default App;
