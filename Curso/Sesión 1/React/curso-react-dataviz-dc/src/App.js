import logo from "./logo.svg";
import "./App.css";

function App() {
  const nombre = "Data Cívica";
  const str = `Hola, ${nombre}`;

  console.log(str);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>¡Hola, {nombre}!</p>
          <a
            data-toggle="tooltip"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="form">
            <label htmlFor='1'>
              Etiqueta
            </label>
            <input id='1' type='input' placeholder="Text"/>
          </div>
        </header>
      </div>
      <div>Adiós</div>
    </>
  );
}

export default App;
