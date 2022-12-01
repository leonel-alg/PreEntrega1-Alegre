import React from 'react';
import Cartwidget from './cartwidget';

const NavBar = () => {
  return (
    <div className='container'>

    <div className='row' >
<div className='col-md-6'>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">motolandia</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">inicio</a>
            <a className="nav-link" href="#">motos</a>
            <a className="nav-link" href="#">repuestos</a>
            <a className="nav-link" href='#'>indumentaria</a>
          </div>
        </div>
      </div>
    </nav>
</div>
    <div className="col-md-6 d-flex justify-content-end align-items-center">

  <Cartwidget/>

     </div>

    </div>
    </div>
  )
}

export default NavBar; 
