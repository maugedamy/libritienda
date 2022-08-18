import ItemCounter from "../ItemCounter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {React, useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

function ItemDetail(libro) {
  const [mostrarCompra, setMostrarCompra] = useState(false);
  const [contCarrito, setContCarrito] = useState(0);
  const { addToCart } = useContext(CartContext);
  
  const AgregaralCarrito = (count) => {
  //  setMostrarCompra(!mostrarCompra);
  //  setContCarrito(contCarrito+cont);
  //  console.log(contCarrito);
    addToCart({...libro.libroDetail, count});
  };

  return (
    <div
      className="libros-list"
      style={{ display: "grid", justifyContent: "center" }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={libro.libroDetail.pictureUrl} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {`${libro.libroDetail.title}`} ({libro.libroDetail.id})
          </Card.Title>
          <Card.Title
            style={{ textAlign: "center" }}
          >{`$${libro.libroDetail.price}`}</Card.Title>
          {<Card.Text>{`${libro.libroDetail.description}`}</Card.Text>}
          {/* {!mostrarCompra&&<ItemCounter fnAgregarAlCarrito={AgregaralCarrito}/>}
          {mostrarCompra&&<Link to={`/carrito`}> */}
          {<ItemCounter fnAgregarAlCarrito={AgregaralCarrito}/>}
            {/* <button>Comprar</button>
          </Link>} */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
