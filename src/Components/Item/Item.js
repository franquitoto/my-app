import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Item = ({data}) => {
    return (
        <>
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Nombre: {data.name}</CardTitle>
                        <CardSubtitle>Email: {data.email}</CardSubtitle>
                        <CardText>Nombre de usuario: {data.username}</CardText>
                        
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default Item;
