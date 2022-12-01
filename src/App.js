import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/navbar";

function App() {
  return (
    <div className='container'>
      <NavBar/> 
      <ItemListContainer greeting= {"no se encontraron productos"}/> 

    </div>
    
  );
}

export default App;
