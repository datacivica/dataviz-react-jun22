import React, { useState, useEffect } from "react";

// Styles
import styles from "./Button.module.css";

function Button({ etiqueta, etiqueta2, children, ...props }) {
  const [etiquetaClick, setEtiquetaClick] = useState(1);

  const handleClick = () => {
    setEtiquetaClick(etiquetaClick + 1);
  };

  useEffect(
    () => {
      console.log("se montó el botón");
    },
    // Arreglo de dependencias: Como el arreglo de dependencias está vacío, el callback sólo se ejecutará cuando el componente se monte
    []
  );

  useEffect(() => {
    console.log("se actualizó el valor con", etiquetaClick);
  }, [etiquetaClick]);

  useEffect(
    () => {
      let interval;
      if (etiquetaClick === 5) {
        interval = setInterval(() => console.log("ya pasó un segundo"), 1000);
      }

      // Función de limpieza: se ejecuta cuando el componente se vacía
      return () => clearInterval(interval);
    },
    // Arreglo de dependencias: el hook observará el cambio en estas variables y ejecutará la función callback dentro de useEffect
    [etiquetaClick]
  );

  return (
    <button
      {...props}
      className={`bg-slate-500 ${styles.boton} ${styles["letra-negra"]} ${styles.borde} boton`}
      onClick={handleClick}
    >
      {etiqueta2}
      {etiqueta || children} Cuenta: {etiquetaClick}
    </button>
  );
}

export default Button;
