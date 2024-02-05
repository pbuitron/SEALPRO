
import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'; // Asegúrate de tener instalado react-bootstrap
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Cabecera.css';

const Cabecera = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand>
          <Link to='/'><Logo /> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="mr-auto">
            <Link to='/'>
            <Button>Home</Button>
            </Link>
              
            
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='./reparacion-de-fugas'>Reparación de Fugas</Link> </NavDropdown.Item>
              <NavDropdown.Item disabled><Link>Reparación de Corrosión y Refuerzos</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Industrias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link>Petróleo y Gas</Link> </NavDropdown.Item>
              <NavDropdown.Item><Link>Industria Minera y Metálica</Link> </NavDropdown.Item>
              <NavDropdown.Item disabled><Link> Generación de Energia</Link> </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> <Link to='/aplicacion-de-producto'> Aplicación </Link> </Nav.Link>
            <Nav.Link > <Link to='/faq'>Preguntas Frecuentes</Link>  </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Cabecera;
