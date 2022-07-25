// export default const Navbar = () => {
//     <nav className="nav">
//         <a href="/" className = "site-title">LibriStore</a>
//         <ul>
//             <li>
//                 <a href="/generos">Géneros</a>
//             </li>
//             <li>
//                 <a href="/autores">Autores</a>
//             </li>
//             <li>
//                 <a href="/bestsellers">Bestsellers</a>
//             </li>
//             <li>
//                 <a href="/colecciones">Colecciones</a>
//             </li>
//             <li>
//                 <a href="/carrito">Carrito</a>
//             </li>

//         </ul>
//     </nav>
// }

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
    return (
        <>
            {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">LibriTienda</Navbar.Brand>
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
                                    <Nav.Link href="./index">Inicio</Nav.Link>
                                    <Nav.Link href="./colecciones">Colecciones</Nav.Link>
                                    <Nav.Link href="./generos">Géneros</Nav.Link>
                                    <NavDropdown
                                        title="Idiomas"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Español</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Inglés
                                        </NavDropdown.Item>
                                        {/* <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Géneros
                                        </NavDropdown.Item> */}
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;