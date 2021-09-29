import React from 'react';
import CardWidget from './CardWidget';



function PrimerComponente () {
    const primerJsx = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Vegetarianos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Colaciones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Deportistas</a>
        </li>
      </ul>
     
                <li className="nav-item">
                    <CardWidget/>
                </li>
            
    </div>
  </div>
</nav>
        )
    
    return (
        <div>
            {primerJsx}
            
        </div>
        
          
          
    );
  }
  
  export default PrimerComponente;
  