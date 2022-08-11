import ItemCounter from "../ItemCounter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCallback } from "react";

function ItemDetail(libro) {
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
          {<ItemCounter />}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
