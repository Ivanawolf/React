import React, {useState} from 'react';



const ItemCount = (max) => {
  const [contador, setContador] =useState (0);
  const [stock] = useState (15);

  if (contador > stock){
   setContador (0);
} else if (contador < 0)
  setContador (0);  

 return (
   <div>
    <span> Comprar {contador} </span>
    <span> Tienes disponibles {stock} </span>
   
  <div>
    <button className="btn btn-outline-success my-2 my-sm-0" onClick = {() => setContador (contador + 1) }>
      Sumar Productos
    </button>
  </div>
    <button className="btn btn-outline-success my-2 my-sm-0" onClick = {() => setContador (contador - 1)}>
      Restar Productos
    </button>
  </div>
  );
 }
    
  
  export default ItemCount;
 