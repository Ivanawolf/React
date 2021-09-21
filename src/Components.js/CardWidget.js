import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faShoppingCart} from '@fortawesome/free-solid-svg-icons';



const CardWidget = () => { 
    
    return (
        <button class="btn btn-outline-success my-2 my-sm-0" >
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrito
        </button>
          
          
    );
  }
  
  export default CardWidget;
  