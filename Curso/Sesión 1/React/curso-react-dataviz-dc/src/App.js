import styled from "styled-components";

import logo from "./logo.svg";
import loQueDiga, { funcionQueRegresaHola as hola } from "./utils/funciones";
import "./App.css";

// Componentes
import Button from "./components/Button/Button";
import { useState } from "react";

const StyledButton = styled.button`
  border: 1px solid black;
  background-color: #eeeeee;
  border-radius: 25px;
  font-weight: bold;
  padding: 20px 15px;
`;

const StyledAnchor = styled.a`
  ${({ withBackground }) =>
    withBackground
      ? "background-color: " + withBackground
      : "background-color: red"};
  border: 4px solid ${(props) => props.color};

  &:hover {
    color: white;
  }

  & .text {
    color: green;

    &:hover {
      color: pink;
    }
  }
`;

function App() {
  const [hideButton, setHideButton] = useState(false);

  const nombre = "Data Cívica";
  const str = `Hola, ${nombre}`;
  const etiquetas = {
    etiqueta: "hola",
    etiqueta2: "adiós",
  };

  console.log(str);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            ¡{loQueDiga("Hey,")} {hola()} {nombre}!
          </p>
          <a
            data-toggle="tooltip"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <StyledButton onClick={() => setHideButton(!hideButton)}>
            Este es un botón con <code>styled-components</code>
          </StyledButton>
          {!hideButton &&
          <Button {...etiquetas}>
            <ul>
              <li>Hola</li>
            </ul>
          </Button>}
          <StyledAnchor withBackground="transparent" color="cyan">
            <span className="text">Link vacío</span>
          </StyledAnchor>
          <StyledAnchor withBackground="transparent" color="cyan">
            <span className="text">Link vacío</span>
          </StyledAnchor>
          <StyledAnchor withBackground="transparent" color="cyan">
            <span>Link vacío</span>
          </StyledAnchor>
          <button className="rounded-full bg-red-400">
            Botón redondeado con Tailwind
          </button>
        </header>
      </div>
      <div>Adiós</div>
    </>
  );
}

export default App;
