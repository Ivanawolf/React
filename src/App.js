
import './App.css';
import PrimerComponente from './Components.js/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './Components.js/ItemListContainer';
import ItemCount from './Components.js/ItemCount';
import ProductosNutri from './Components.js/ItemList';


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
      
        
          <ItemListContainer/>
         
                 
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
        
    </div>
  );
}

export default App;
