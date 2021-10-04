
import './App.css';
import PrimerComponente from './Components.js/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainter from './Components.js/ItemListContainer'
import { Container } from "react-bootstrap";

import ItemCount from './Components.js/ItemCount';
import ProductosNutri from './Components.js/ItemList';


function App() {
 
  return (
    <div className="App">
      <PrimerComponente /> 
    
      <header className="App-header">
      
     
      <Container>
       <ItemListContainter />
      </Container> 
         
                 
        
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
