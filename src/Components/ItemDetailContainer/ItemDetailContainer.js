import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() =>{

        axios('https://api.nasa.gov/planetary/apod?api_key=UZShGCnz26BFrHayEi9jWdYZymjCyXXM3cEPM2Qo').then((res) => setTimeout(() => {
            setIsloading(false)
            setItem(res.data)
        },2000));
    },[]);
  return (
      <>
        {isLoading ? <p>Cargando...</p>: <ItemDetail data={item}></ItemDetail>}
        
      </>
  );
};

export default ItemDetailContainer;
