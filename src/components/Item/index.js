import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item({ id, title, price, pictureUrl}) {

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
            <Link to={`/detalles/${id}`}>
                <button>Ver detalles</button>
            </Link>
            </Card.Body>
            {/* {<button onClick={loadLibrosDetails}>Ver detalles</button>} */}
            
        {/* </div>          */}
        </Card>
    );
}

export default Item;