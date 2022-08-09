import ItemCounter from '../ItemCounter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCallback } from 'react';

function ItemDetail(libro) {

    return (
        <Card style={{ width: '25rem' }}>
            {/* <Card.Img variant="top" src={pictureUrl} /> */}
            <Card.Body>
            {/* <Card.Title style={{textAlign:'center'}}>{`${title}`} ({id})</Card.Title> */}
            {/* <Card.Title style={{textAlign:'center'}}>{`$${price}`}</Card.Title> */}
            {<Card.Text>{`${libro.libroDetail.description}`}</Card.Text>}
            {<ItemCounter />}
            </Card.Body>
        </Card>
    );
}

export default ItemDetail;