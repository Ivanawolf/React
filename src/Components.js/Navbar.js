import React from 'react';
import CardWidget from './CardWidget';
import {Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Item from "./Item";



function Navbar () {

  return (
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link"  to = "/home"> Home </Link>
                  </li>                  
                  <li className="nav-item">
                    <Link className="nav-link"  to = "/categoria/0">Productos </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to = "/categoria/1">Vegetarianos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to = "/categoria/2">Colaciones</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to = "/categoria/3">Deportistas</Link>
                  </li>
                  <li className="nav-item">
                    <CardWidget/>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          );
    }
  
        

  
  export default Navbar;
  