import { useState, useEffect } from "react";
import React from 'react';
import ItemList from "./ItemList";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { getFirestore } from "../Firebase";
import { useParams } from "react-router-dom";



function ItemListContainer() {
    const [productList, setproductList] = useState([]);
    const [loading, setLoading] = useState(false);
    let {categoria_id} = useParams ();

    useEffect(() => {
      const getProducts = async () => {
        const { docs } = await getFirestore().collection("1").get();
        const MisProductos = docs.map((producto) => ({ id: producto.id, ...producto.data() })); 
            if(categoria_id != undefined){
              const filtroCategoria = MisProductos.filter( 
                (producto) => producto.categoria_id == categoria_id );
                setproductList(filtroCategoria);
            } 
            else{
              setproductList(MisProductos);
            }
          };
          getProducts();

      }, [categoria_id]);
    
     
  
        

    if (loading) 
      {return <Spinner  animation="border" variant="primary" />
      }
    else{
      return (
      <>
       <Container>
          <Row className="item-list-container">
            
              <ItemList items={productList} />
            
          </Row>
        </Container>
      </>
      );
    }
  }
  
export default ItemListContainer ;