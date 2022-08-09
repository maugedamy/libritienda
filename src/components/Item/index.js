import { useEffect, useState } from 'react';
import ItemCounter from '../ItemCounter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCallback } from 'react';
import ItemDetailContainer from '../ItemDetailContainer';


function Item({ id, title, description, price, pictureUrl, Callback}) {
    // const loadLibrosDetails = function () {
    //     return (<ItemDetailContainer id={id}/>)
    //     // Callback(id)
    // }
    const [mostrar, setMostrar] = useState(false);
    const loadLibrosDetails = () => {
        setMostrar(!mostrar)
    }

    return (
        <Card style={{ width: '25rem' }}>
        {/* // <div className="Libros-Item"> */}
            {/* <img src={pictureUrl} /> */}
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{`${title}`} ({id})</Card.Title>
            <Card.Title style={{textAlign:'center'}}>{`$${price}`}</Card.Title>
            {/* <Card.Text>{`${description}`}</Card.Text> */}
            {/* <ItemCounter /> */}
            </Card.Body>
            {<button onClick={loadLibrosDetails}>Ver detalles</button>}
            {mostrar && <ItemDetailContainer id={id} />}
        {/* </div>          */}
        </Card>
    );
}

export default Item;