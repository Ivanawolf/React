import { Modal, Card, Badge } from "react-bootstrap";
import ItemCount from "./ItemCount";
import React, { useState } from "react";


function ItemDetail (props) {
  const {nombre, precio, stock, imagen} = props.props;
  const [cartItems, setCartItems] = useState(null);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Img variant="top" src={imagen} width="60%" height = "60%"/>
          <Card.Body>
            <Card.Text>
              <br />
              <span>
                <Badge bg="danger">Precio:${precio}</Badge>
              </span>
            </Card.Text>
          <ItemCount  
                  stock={stock}
                  initial="1"
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};

export default ItemDetail;
