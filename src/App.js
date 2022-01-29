import React from 'react';
import './App.css';

// Componentes

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

class App extends React.Component{
  render(){
    return(
      <>
        <NavBar/>
          <ItemListContainer producto="Desayunadorr"></ItemListContainer>
          <ItemListContainer producto="Casita de muñecas"></ItemListContainer>
          <ItemListContainer producto="Cocinita"></ItemListContainer>
          <ItemListContainer producto="Mesita"></ItemListContainer>
          <br></br>
          <ItemCount
            stock={10}
            initial= {1}
          />
          
          
      </>
    )
  }
}

export default App;
