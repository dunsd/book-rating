import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import '../css/HeaderFooter.scss';
import logo from '../images/book-logo.jpg'

const Header = () => {

  return (

    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container className="header">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="logo" alt="Book Logo"/>
      
            </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/library">Library</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;


