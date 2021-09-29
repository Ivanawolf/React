import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';



const CardWidget = () => { 
    
    return (
        <button className="btn btn-outline-success my-2 my-sm-0" >
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrito
        </button>
          
          
    );
  }
  
  export default CardWidget;
  