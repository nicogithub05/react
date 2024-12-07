import logo from './platzi.webp';
import './App.css';

function App() {
  return (    
    <div className="App">
       <TodoItem/>;
       <TodoItem/>;
       <TodoItem/>;
       <TodoCount/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// Creamos un componente con la primera palabra en mayúscula
function TodoItem() {
  return <li>
     <span>V</span>,
     <p>Llorar con la llorona</p>
     <span>X</span>
  </li>
 
}

function TodoCount() {
  return <h1>
    Completaste 
    3 de
    5 todos
  </h1>
}

export default App;