import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "../ItemDetail";
import { getLibroById } from "../../asyncmock";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

export function ItemDetailContainer() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [libro, setLibro] = useState();
  const { id } = useParams();

  useEffect(() => {
    handleShow(true);
    getLibroById(id).then((libro) => {
      setShow(false);
      setLibro(libro);
    });
  }, [id]);
  return (
    <>
      <Modal
        centered
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <div className="spinner-div">
            <Spinner animation="grow" />
          </div>
          <div className="spinner-div">
            <Spinner animation="grow" />
          </div>
          <div className="spinner-div">
            <Spinner animation="grow" />
          </div>
        </Modal.Body>
      </Modal>
      {/* {!libro && <div>Cargando...</div>} */}
      {libro && (
        <div className="item-detail-container">
          <ItemDetail libroDetail={libro} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
