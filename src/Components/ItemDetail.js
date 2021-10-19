import { Modal, Card, Badge } from "react-bootstrap";
import ItemCount from "./ItemCount";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import {CartContextUse} from './Cartcontext';



function ItemDetail (props) {
  const {nombre, precio, stock, imagen} = props.props;

    //Context Api
    const { addItem } = CartContextUse();
    const onAdd = (qty) => {
      addItem(props.props, qty);
    };

  
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
            <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            <Link className="btn btn-secondary" to="/productos">
              Volver
            </Link>
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};


export default ItemDetail; 
  

