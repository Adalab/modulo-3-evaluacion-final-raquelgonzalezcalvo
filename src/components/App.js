/* SECCIÓN DE IMPORT */
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import ListCharacter from "./ListCharacter";
// import "...styles/App.scss";
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getDataApi().then((cleanData) => {
      console.log(cleanData);
      setCharacterList(cleanData);
    });
  }, []);

  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <>
      <h1 className="title">Harry Potter</h1>
      <ListCharacter characterList={characterList}></ListCharacter>
    </>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
