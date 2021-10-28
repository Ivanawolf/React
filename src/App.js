import './App.css';
import Navbar  from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainter from './Components/ItemListContainer';
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from './Components/Cart';
import CartContextProvider from './Components/Cartcontext';
import Checkout from './Components/Checkout';

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
          <Route exact path="/categoria/:categoria_id" component={ItemListContainter}/> 

          <Route exact path="/cart">
              <Cart />
          </Route>
          
          <Route exact path="/cart/checkout">
            <Checkout/>
          </Route>
          
        </Switch>
                  
      </>
      </Router>
    </CartContextProvider>
  );
}

export default App;