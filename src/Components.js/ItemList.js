
import {useState } from "react";
import Item from "./Item";
import { Row, Spinner } from "react-bootstrap";

function ItemList() {

  const [productList, setproductList] = useState(0);
  const [loading, setLoading] = useState(true);

  const MisProductos = [
    {
      id: 1,
      nombre: "Nueces",
      precio: 500,
      stock: 15,
      
    },
    {
      id: 2,
      nombre: "Frutas desecadas",
      precio: 450,
      stock: 15,
    },
    {
      id: 3,
      nombre: "Granola",
      precio: 600,
      stock: 15,
    },
    
  ];

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
