import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartWidget from "../CartWidget";
import { CartContext } from '../../context/CartContext';
import React, { useContext } from 'react';

function NavBar() {
  const { cart } = useContext(CartContext);
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">LibriTienda</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="nav-link" to="/">Inicio</Link>
                  <Link className="nav-link" to="/category/colecciones">Colecciones</Link>
                  {/* <Link to="/category/generos">Géneros</Link> */}
                  <NavDropdown
                    title="Idiomas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/category/espanol">Español</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/category/ingles">Inglés</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  {cart.length > 0 && <Link className="nav-link" to="./carrito">
                    <CartWidget />
                  </Link>
                  }
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
