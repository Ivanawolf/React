import { Card, Badge } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";

function Item(props) {
  const { id, nombre, precio, stock, imagen} = props.props;
  
  return (
    <div className="col-sm-6 col-md-3">
      <Card>
       
        <Card.Body>
           <Card.Img variant="top" src={imagen} width="60%" height = "150px"/>
        <Card.Title>{nombre} </Card.Title>
          <span style={{ textAlign: "center" }}>
             {id}
          </span>
            <br /> 
            <br />
          <span>${precio}</span>
          <Card.Text style={{ textAlign: "center" }}>
            <Badge bg="success">Stock: {stock}</Badge>
          </Card.Text>
          <ItemDetailContainer props={props.props}/> 
        </Card.Body>  
      </Card>

            
           
          
    </div>
  );
}

export default Item;