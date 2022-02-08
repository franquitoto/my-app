import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({ data }) {
    return (
        <>
            <div className='row' style={{margin:50}}>
                <Card className='col-lg-3'>
                    <CardBody>
                        <CardImg top width="100%" src={data.hdurl} alt="Card image cap" />
                        <CardTitle className='text-center'>Fecha {data.date}</CardTitle>
                        <CardSubtitle className='text-center'>copyright: {data.copyright}</CardSubtitle>
                        <Button >Contactar</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default ItemDetail;
