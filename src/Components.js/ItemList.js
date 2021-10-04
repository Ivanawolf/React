
import {useState } from "react";
import Item from "./Item";
import { Row, Spinner } from "react-bootstrap";
import MisProductos from "./data/misproductos.json"

function ItemList() {

  const [productList, setproductList] = useState(0);
  const [loading, setLoading] = useState(true);

  
  const prodNutri = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(MisProductos); 
    }, 2000);
  });

  prodNutri.then((response) => {
    setproductList(
      response.map((item, index) => <Item props={item} key={index} />)
    );

    setLoading(false);
  });


  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row>{productList}</Row>
      )}
    </>
  );
}

export default ItemList;
