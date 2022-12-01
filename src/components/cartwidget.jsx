import React from 'react';



const  Cartwidget= () => {
    
    return (

        <button type="button" className="btn bg-light position-relative">
            <img src="imagenes/cart3.svg" alt="carrito" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 2 </span>
        </button>

    )
}
export default Cartwidget;