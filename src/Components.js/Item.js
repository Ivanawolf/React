
import ItemCount from "./ItemCount";

function Item(props) {
  const { id, nombre, precio, stock} = props.props;

  
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