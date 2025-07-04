import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

// export default Bootstrap1



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark">

      <Container fluid>
        <GiHamburgerMenu />
        <Navbar.Brand href="#" className='text-light'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1"  className='text-light'>Home</Nav.Link>
            <Nav.Link href="#action2"  className='text-light'>Link</Nav.Link>
            <NavDropdown title={<span className='text-light'>Link</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Women
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Kids
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;