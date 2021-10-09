
import './App.css';
import Navbar  from './Components.js/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainter from './Components.js/ItemListContainer'
import Item from './Components.js/Item';
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";




function App() {
 
  return (
    <Router>
    <>
      <header className="App-header">
        <Container fluid>
          <Navbar/>
        </Container>
      </header>
     
      <Switch>
      <Route exact path="/" component={ItemListContainter}/>
      <Route path= "/home">
            <h1> Home </h1>
      </Route>
      <Route exact path="/categoria/:categoria_id" component={ItemListContainter}/> 
      </Switch>
                 
    </>
    </Router>
  );
}

export default App;