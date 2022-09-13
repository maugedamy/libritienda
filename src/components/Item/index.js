import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./item.css";

function Item({ id, title, price, pictureUrl}) {

    return (
        <Card className="cardContainer">
            <Card.Img className="cardImg" variant="center" src={pictureUrl} />
            <Card.Body className='cardBody'>
            <Card.Title className="cardTitle">{`${title}`}</Card.Title>
            <Card.Title className="cardTitle">({id})</Card.Title>
            <Card.Title style={{textAlign:'center'}}>{`$${price}`}</Card.Title>
            <Link className='cardAnchor' to={`/detalles/${id}`}>
                <button className='btn'>Ver detalles</button>
            </Link>
            </Card.Body>
        </Card>
    );
}

export default Item;