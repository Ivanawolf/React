import './App.css';
import Navbar  from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainter from './Components/ItemListContainer';
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from './Components/Cart';
import CartContextProvider from './Components/Cartcontext';

function App() {
 
  return (
  <CartContextProvider>
    <Router>
      <>
        <header className="App-header">
          <Container fluid>
            <Navbar/>
          </Container>
        </header>
      
        <Switch>
        <Route exact path="/productos" component={ItemListContainter}/>
        <Route path= "/home">
              <h1> Home </h1>
        </Route>
        <Route exact path="/categoria/:categoria_id" component={ItemListContainter}/> 
        <Route>
            <Cart exact path="/cart" />
        </Route>
        </Switch>
                  
      </>
      </Router>
    </CartContextProvider>
  );
}

export default App;