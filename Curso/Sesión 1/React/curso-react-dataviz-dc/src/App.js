import logo from "./logo.svg";
import loQueDiga, { funcionQueRegresaHola as hola } from './utils/funciones';
import "./App.css";

// Componentes
import Button from "./components/Button";

function App() {
  const nombre = "Data Cívica";
  const str = `Hola, ${nombre}`;
  const etiquetas = {
    etiqueta: 'hola',
    etiqueta2: 'adiós',
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
          <p>¡{loQueDiga('Hey,')} {hola()} {nombre}!</p>
          <a
            data-toggle="tooltip"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button {...etiquetas}>
            <ul>
              <li>
                Hola
              </li>
            </ul>
          </Button>
        </header>
      </div>
      <div>Adiós</div>
    </>
  );
}

export default App;
