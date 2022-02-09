import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <>
        <nav className='nav'>
            <div className='div2'>
              <CartWidget/> 
                <ul>
                    <Link to="/" className='Link'>Home</Link>
                    <Link to="/Productos" className='Link'>Productos</Link>
                    <Link to="/Servicios" className='Link'>Servicios</Link>
                    <Link to="/Preguntas" className='Link'>Preguntas</Link>
                </ul>
                <input className='input1' placeholder='Escriba su busqueda..'></input>
                <button className='button1'>Buscar</button>
            </div>
        </nav>
      </>
  );
};

export default NavBar;
