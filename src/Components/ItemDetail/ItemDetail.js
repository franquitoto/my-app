import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({ data }) {
    return (
        <>
            <div className='col-lg-3 pb-3'>
                <Card >
                    <CardBody >
                        <CardTitle className='text-center'>Producto: <b>{data.name}</b></CardTitle>
                        <CardSubtitle className='text-center'>Precio:$ {data.price}</CardSubtitle>
                        <CardSubtitle className='text-center'>Stock: {data.stock}</CardSubtitle>
                        <Button className='col-lg-12'>Comprar</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default ItemDetail;
