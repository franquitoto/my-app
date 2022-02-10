import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';

const UserDetail = () => {
    const [user, setUser] = useState([]);
    console.log(user)
    let id = useParams();
    let userLogin = id.login
    console.log(userLogin)
    useEffect(() =>{
        axios(`https://api.github.com/users/${userLogin}`).then(res =>
            setUser(res.data)
        );
    },[userLogin]);
  return (
    <>
        <ItemDetail data={user}></ItemDetail>
    </>
  )
}

export default UserDetail