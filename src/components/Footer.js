import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

      <footer>
          <Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
            <Container className="footer">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="https://github.com/dunsd">
                  Github Profile
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </footer>

  );
};

export default Footer;
