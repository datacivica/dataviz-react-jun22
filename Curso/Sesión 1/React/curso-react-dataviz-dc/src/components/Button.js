import React, { useState } from "react";

const Button = ({ etiqueta, etiqueta2, children }) => {
  const [etiquetaClick, setEtiquetaClick] = useState(1);

  const handleClick = () => {
    setEtiquetaClick(etiquetaClick + 1);
  };

  return (
    <button onClick={handleClick}>
      {etiqueta2}
      {etiqueta || children}
    </button>
  );
};

export default Button;
