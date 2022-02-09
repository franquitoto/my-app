import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Item = ({ data }) => {
    return (
        <>
            <div className='m-3'>
                <Card body inverse color="warning">
                    <CardTitle>Nombre de usuario: {data.login}</CardTitle>
                    <CardSubtitle>Repositorio:<a href={data.html_url}>{data.html_url}</a></CardSubtitle>
                </Card>
            </div>
        </>
    );
};

export default Item;
