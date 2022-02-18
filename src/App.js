import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import Item from './Components/Item/Item';
import ItemList from './Components/ItemList/ItemList';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


// Import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CartProvider } from './CartContext';

// Importar views
import Home from './views/Home/Home';
import Productos from './views/Productos/Productos';
import Servicios from './views/Servicios/Servicios';
import Preguntas from './views/Preguntas/Preguntas';
import UserDetail from './views/UserDetail/UserDetail';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Preguntas" element={<Preguntas />} />
          <Route path='/detail/:login' element={<UserDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}



export default App;
