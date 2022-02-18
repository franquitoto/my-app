import React, {useContext} from 'react';
import { CartContext } from '../../CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../../Components/ItemCount/ItemCount';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
const Home = () => {
  const [items, setItems] = useContext(CartContext);
  console.log('data',items);

  
  
  
  return (
    <>
      <div className='row p-3'>
         {items.map((items) =>{
           return<ItemCount data={items} key={items.id}></ItemCount>
         })}
        </div>
    </>
  );
};

export default Home;
