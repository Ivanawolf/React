import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { CartContextUse } from "./Cartcontext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { clear, removeItem, cart, precioTotal } = CartContextUse();
  return (
    <Container>
    <div className="d-flex align-items-center flex-column">
      <h3 className="text-center mt-5">Carrito de compras</h3>
      {cart.map((element) => {
        return (
          <>
            <ListGroup horizontal className="mt-3">
              <ListGroup.Item><img style = {{height : "70%", widht : "50%"}} src={element.props.imagen} className="w-25"></img></ListGroup.Item>
              <ListGroup.Item>{element.props.nombre}</ListGroup.Item>
              <ListGroup.Item>${element.props.precio}</ListGroup.Item>
              <ListGroup.Item>Cantidad: {element.quantity}</ListGroup.Item>
              <Button variant="outline-success" onClick={() => removeItem(element.props.id)}>
              Quitar producto
            </Button>
            </ListGroup>
            
            </>
        );
      })}

           {cart.length > 0 ? (
            <>
              {" "}
              <h5 className="mt-5 align-self-end text-center">
                Total a pagar: ${precioTotal}
              </h5>
              <Link to="cart/checkout" className="btn btn-outline-secondary mt-5 align-self-end">
                Finalizar compra
              </Link>

              <Button onClick={clear} className="w-25 mt-5" variant="secondary">
                Vaciar carrito
              </Button>{" "}
            </>
          ) : (
            <h5>El carrito esta vacio </h5>
          )}
          <Link to="/productos" className="btn btn-dark mt-3 w-25">
            Seguir comprando
          </Link>
        </div>
      </Container>
  );
};

export default Cart;