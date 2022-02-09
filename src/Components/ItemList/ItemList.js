import React,{useState, useEffect} from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const [user, setUser] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json) => setUser(json));
    },[]);

  return (
    <>
        <div className='row'>
            {user.map((user)=>{
                return(
                    <div key={user.id} className='col-lg-3'>
                        <Item data={user}></Item>
                    </div>
                );
            })};
        </div>
    </>
  );
};

export default ItemList;
