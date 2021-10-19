import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



const ItemCount = (props) => {
  const { stock, initial, cartItems, setCartItems,onAdd } = props;
  //creacion de la variable "count" y de setCount que sera la funcion que modificara dicha variable >> se utiliza useState para indicar el valor inicial del estado
  const [count, setCount] = useState(parseInt(initial));

  const restarCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const resetCount = ()=> {
    setCount (0);
  };
  const agregaralCarrito = (count) => {
    onAdd (count);
    resetCount ();
  }

  const sumarCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };


  //se modifica el Componente ItemCount 
  return (
    <>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={restarCount}
        >
          -
        </button>
        <input
          type="text"
          className="form-control text-center"
          placeholder={count}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={sumarCount}
        >
          +
        </button>
      </div>
      {count > 0 ? (
              <button
                onClick={() => agregaralCarrito(count)}
                type="button"
                className="container-fluid mt-2"
                variant="outline-dark"
              >
                Agregar al carrito
              </button>
            ) : (
              ''
            )}
          <div>
              <Link to="/cart" className="btn btn-dark m-3">
                Finalizar compra
              </Link>
          </div>
      </>
  );
};

export default ItemCount;
