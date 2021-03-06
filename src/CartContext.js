import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const initialState = [
    {id:1 , name: 'Mesa' , price:1000 , stock:10 },
    {id:2 , name: 'Silla', price:650 , stock:10 },
    {id:3 , name: 'Desayunador', price:300 , stock:10 },
    {id:4 , name: 'Cocinita', price:1200 , stock:10 },
    {id:5 , name: 'Matero', price:250 , stock:10 },
    {id:6 , name: 'Pizera', price:150 , stock:10 },

];

export const CartProvider = ({children}) =>{
    const [items, setItems] = useState(initialState);

    return (
        <CartContext.Provider value ={[items, setItems]}>
            {children}
        </CartContext.Provider>
    );
}