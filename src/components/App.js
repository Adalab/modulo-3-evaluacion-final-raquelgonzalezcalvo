/* SECCIÓN DE IMPORT */
import { useEffect } from "react";
import getDataApi from "../services/api";
// import "...styles/App.scss";
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  useEffect(() => {
    getDataApi().then((cleanData) => {
      console.log(cleanData);
    });
  }, []);

  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div className="App">{/* Aquí va el HTML */}</div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
