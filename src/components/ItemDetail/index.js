import ItemCounter from "../ItemCounter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { React, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./itemDetail.css";

function ItemDetail(libro) {
  const [mostrarCompra, setMostrarCompra] = useState(false);
  const [contCarrito, setContCarrito] = useState(0);
  const { addToCart } = useContext(CartContext);

  const AgregaralCarrito = (count) => {
      addToCart({ ...libro.libroDetail, count });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Agregaste el libro al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
  };

  return (
    <div
      className="libros-list"
      style={{ display: "grid", justifyContent: "center" }}
    >
      <Card className="cardDetail">
        <Card.Img
          className="cardImgDetail"
          variant="top"
          src={libro.libroDetail.pictureUrl}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {`${libro.libroDetail.title}`}
          </Card.Title>
          <Card.Title style={{ textAlign: "center" }}>
            ({libro.libroDetail.id})
          </Card.Title>
          <Card.Title
            style={{ textAlign: "center" }}
          >{`$${libro.libroDetail.price}`}</Card.Title>
          {<Card.Text>{`${libro.libroDetail.description}`}</Card.Text>}
          {<ItemCounter fnAgregarAlCarrito={AgregaralCarrito} />}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
