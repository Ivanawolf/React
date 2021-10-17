import { useState, useEffect } from "react";
import React from 'react';
import ItemList from "./ItemList";
import { Row, Col, Spinner } from "react-bootstrap";


import MisProductos from "./data/misproductos.json"
import { useParams } from "react-router-dom";



function ItemListContainer() {
    const [productList, setproductList] = useState([]);
    const [loading, setLoading] = useState(false);
    let {categoria_id} = useParams ();

    useEffect(() => {
    console.log (categoria_id)
      const prodNutri = new Promise((resolve, reject) => {
          setLoading(true);
          setTimeout(function () {
            if(categoria_id != undefined){
              resolve(MisProductos.filter( 
                (producto) => producto.categoria_id == categoria_id ));
            }else{
              resolve(MisProductos);
            }
          }, 500);

      });
  
      prodNutri.then((response) => {
        setLoading(false);
        setproductList(response);
      });
      
      }, [categoria_id]);


    if (loading) 
      {return <Spinner  animation="border" variant="primary" />
      }
    else{
      return (
        <>
          <Row className="item-list-container">
            <Col md={12} className="d-flex justify-content-center">
              <ItemList items={productList} />
            </Col>
          </Row>
        </>
      );
    }
  }
  
 

  export default ItemListContainer ;