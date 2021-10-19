import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { CartContextUse } from "./Cartcontext";



const CardWidget = () => { 
    const { cartProducts } = CartContextUse();
    return (
        <button className="btn btn-outline-success my-2 my-sm-0" >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartProducts > 0 ? (
            <span>  {" "} {cartProducts}  {" "} </span> 
            ) : (
            ""
            )}
            Carrito
        </button>
          
          
    );
  }
  
  export default CardWidget;
  