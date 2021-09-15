import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const jsx = <h1> Ivana Wolf </h1>;
  let styles = {color : 'pink'
}
const Stylesjsx = <div style = {styles}>
  <p>{jsx}</p>
</div>
  return (
    <div className="App">
      <PrimerComponente /> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          {Stylesjsx}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        
    </div>
  );
}

export default App;
