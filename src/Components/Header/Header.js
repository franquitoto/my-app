import React from 'react';

const Header = (props) => {
  return (
        <div>
            <h1>Hola soy {props.title}</h1>
            <h2>Hola soy{props.subtitle}</h2>
        </div>
  );
};

export default Header;
