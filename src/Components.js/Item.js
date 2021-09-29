
import ItemCount from "./ItemCount";

function Item(props) {
  const { id, nombre, precio, stock} = props.props;
  
//   const product = {
//     stock: stock,
//     initial: 1,
//     onAdd: (stock, cantidad) => {
//       alert(`Se agregarán ${cantidad} unidades al carrito`);
//       return stock - cantidad;
//     },
//     precio: precio,
//   };
  

  return (
    <div className="col-sm-6 col-md-3">
      
            <span style={{ textAlign: "center" }}>
             {id}
            </span>
            <br /> 
            
            <span>{nombre}</span>
            <br />
           
            <span>${precio}</span>
            


            
           
          <ItemCount /> 
    </div>
  );
}

export default Item;