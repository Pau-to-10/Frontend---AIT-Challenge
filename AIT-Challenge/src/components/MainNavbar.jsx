import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import LoginButton from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/animals">Animals</Nav.Link>
              <Nav.Link href="/gaming">Gaming</Nav.Link>
              <Nav.Link href="/music">Music</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/memes">Memes</NavDropdown.Item>
                <NavDropdown.Item href="/stickers">Stickers</NavDropdown.Item>
              </NavDropdown>
              <Button>Upload</Button>
            </Nav>
          </Navbar.Collapse>
          <LoginButton />
          <LogoutButton />
        </Container>
      </Navbar>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
};

export default MainNavbar;
