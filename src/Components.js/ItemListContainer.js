function ItemListContainer () {

    return (
        <MiComponentePrincipal name ="verás pronto los productos que vendemos"/>
      
    );
  }

  const MiComponentePrincipal = (props) => {
        let styles = {color : 'pink', backgroundColor : 'black'}
        const jsx = <h1 style = {styles}>En esta sección: {props.name}</h1>
        return (jsx)
  }
  
  export default ItemListContainer ;