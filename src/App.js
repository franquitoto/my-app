import React from 'react';
import './App.css';

// Componentes

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

class App extends React.Component{
  render(){
    return(
      <>
        <NavBar/>
        
          <ItemListContainer producto="Desayunador"></ItemListContainer>
          <ItemListContainer producto="Casita de muñecas"></ItemListContainer>
          <ItemListContainer producto="Cocinita"></ItemListContainer>
          <ItemListContainer producto="Mesita"></ItemListContainer>
        
      </>
    )
  }
}

export default App;
