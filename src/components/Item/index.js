import Card from 'react-bootstrap/Card';


function Item({ id, title, description, price, pictureUrl}) {
    const loadLibrosDetails = () => {
        window.location.href=`/detalles/${id}`
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
        {/* </div>          */}
        </Card>
    );
}

export default Item;