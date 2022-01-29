import React from 'react';

import './ItemCount.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount(props) {
    const [counter, setCounter] = React.useState(props.initial);

    const incrementar = () => {
        if(counter >= props.stock){
            alert("No se pueden sumar mas productos al stock");
        }
        else{
            setCounter(counter +1);
        }
        
    }
    const restar = () => {
        if( counter <= 0){
            alert("no se puede sumar al carrito menos de 0");
        }else{
            setCounter(counter -1)
        }
    }
    const refreshCounter = () => {
        setCounter(0)
        alert("usted a agregado "+ counter + " productos al carrito")
    }
    return (
        <>
            <div className='divCard'>
                <Card body inverse color="primary" className='lg-5'>
                    <CardTitle>Productos al carrito</CardTitle>
                    <CardText>
                    <div className='row'>
                            <div className='col-lg-4'>Quitar</div>
                            <div className='col-lg-4'>Total</div>
                            <div className='col-lg-4'>Sumar</div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 btn' onClick={restar}><h3>-</h3></div>
                            <div className='col-lg-4'><h3>{counter}</h3></div>
                            <div className='col-lg-4 btn ' onClick={incrementar}><h3>+</h3></div>
                        </div>
                    </CardText>
                    <Button color="secondary" onClick={refreshCounter}>Agregar</Button>
                </Card>
            </div>
        </>
    );
}

export default ItemCount;
