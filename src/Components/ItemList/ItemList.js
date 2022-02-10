import React,{useState, useEffect} from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

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
                    <Link to={`/detail/${user.login}`} className='col-lg-3' key={user.id}>
                            <Item data={user}></Item>
                    </Link>
                );
            })};
        </div>
    </>
  );
};

export default ItemList;
