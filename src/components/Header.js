import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import '../css/Header.scss';

const Header = () => {

  return (

    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container className="header">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="me-auto" >
          <Nav.Link as={Link} to="/library">Library</Nav.Link>
          <Nav.Link as={Link} to="/add">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;


