import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getLibros, createOrderInFirestore } from "../../asyncmock";
import "./checkout.css";
import { useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Checkout() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const { cart, removeFromCart, removeAll, calcTotal } =
    useContext(CartContext);

  const inputNombre = useRef(null);
  const inputEmail = useRef(null);
  const inputEmailVal = useRef(null);
  const inputTelefono = useRef(null);
  const inputCiudad = useRef(null);
  const inputProv = useRef(null);
  const inputCP = useRef(null);

  const createOrder = () => {
    let valForm = inputNombre.current.value != "";
    valForm = valForm && inputEmail.current.value != "";
    valForm = valForm && inputEmailVal.current.value != "";
    valForm = valForm && inputTelefono.current.value != "";
    valForm = valForm && inputCiudad.current.value != "";
    valForm = valForm && inputProv.current.value != "";
    valForm = valForm && inputCP.current.value != "";

    if (valForm) {
      if (inputEmail.current.value !== inputEmailVal.current.value) {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'El correo electrónico no coincide'//,
          //footer: '<a href="">Why do I have this issue?</a>'
        });
        // alert(`El correo electrónico no coincide`);
      } else {
        const LibrosDB = cart.map((libroDB) => ({
          id: libroDB.id,
          title: libroDB.title,
          price: libroDB.price,
          count: libroDB.count,
        }));

        let order = {
          buyer: {
            name: inputNombre.current.value,
            email: inputEmail.current.value,
            phone: inputTelefono.current.value,
            city: inputCiudad.current.value,
            state: inputProv.current.value,
            zip: inputCP.current.value,
          },
          total: calcTotal(),
          items: LibrosDB,
        };
        handleShow(true);
        createOrderInFirestore(order)
          .then((result) => {
            setShow(false);
            Swal.fire(
              'Tu orden ha sido creada',
              'ID: ' + result.id,
              'success'
            );
            // alert("Su orden ha sido creada. ID: " + result.id);
            navigate("/");
          })
          .catch((err) => {
            setShow(false);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salio mal'/*,
              footer: '<a href="">Why do I have this issue?</a>'*/
            });
            console.log(err);
          });

        removeAll();
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Completá todos los campos'
      });
    }
  };
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
      <div className="row">
        <div className="col-75">
          <div className="container">
            <div className="row">
              <div className="col-50">
                <h3>Orden de compra</h3>
                <label htmlFor="fname">
                  <i className="fa fa-user"></i> Nombre y Apellido
                </label>
                <input
                  ref={inputNombre}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John Doe"
                />
                <label htmlFor="email">
                  <i className="fa fa-envelope"></i> Correo electrónico
                </label>
                <input
                  ref={inputEmail}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <label htmlFor="emailVal">
                  <i className="fa fa-envelope"></i> Repetí tu correo
                  electrónico
                </label>
                <input
                  ref={inputEmailVal}
                  type="text"
                  id="emailVal"
                  name="emailVal"
                  placeholder="john@example.com"
                />
                <label htmlFor="telephone">
                  <i className="fa fa-envelope"></i> Teléfono
                </label>
                <input
                  ref={inputTelefono}
                  type="text"
                  id="telephone"
                  name="telephone"
                  placeholder="+5493415666999"
                />
                <label htmlFor="city">
                  <i className="fa fa-institution"></i> Ciudad
                </label>
                <input
                  ref={inputCiudad}
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Rosario"
                />

                <div className="row">
                  <div className="col-50">
                    <label htmlFor="state">Provincia</label>
                    <input
                      ref={inputProv}
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Santa Fe"
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Código Postal</label>
                    <input
                      ref={inputCP}
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="2000"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={createOrder} className="btn">
              Enviar Pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
