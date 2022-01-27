import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
      <>
        <nav className='nav'>
            <div className='div2'>
              <CartWidget/> 
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Productos</a></li>
                    <li><a href=''>Servicios</a></li>
                    <li><a href=''>Preguntas</a></li>
                </ul>
                <input className='input1' placeholder='Escriba su busqueda..'></input>
                <button className='button1'>Buscar</button>
            </div>
        </nav>
      </>
  );
};

export default NavBar;
