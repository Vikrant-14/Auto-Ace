import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export default function AdminNavigationbar() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //       <Container>
    //           <Navbar.Brand href="#home">MyApp</Navbar.Brand>
    //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //           <Navbar.Collapse id="basic-navbar-nav">
    //               <Nav className="me-auto">
    //                   <LinkContainer to="/">
    //                       <Nav.Link>Home</Nav.Link>
    //                   </LinkContainer>
    //                   <LinkContainer to="/about">
    //                       <Nav.Link>About Us</Nav.Link>
    //                   </LinkContainer>
    //                   <LinkContainer to="/contact">
    //                       <Nav.Link>Contact Us</Nav.Link>
    //                   </LinkContainer>
    //               </Nav>
    //           </Navbar.Collapse>
    //       </Container>
    //   </Navbar>

    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home">🛠️AUTOACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/AdminPage">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Addservice">
              <Nav.Link>Add Service</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewBookedServices">
              <Nav.Link>View Booking</Nav.Link>
            </LinkContainer>

            <LinkContainer to="">
              <Nav.Link>View Feedback</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewContact">
              <Nav.Link>View Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
