import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export default function UserNavigationbar() {
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

    <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
      <Container>
        <Navbar.Brand href="#home">🛠️AUTOACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <LinkContainer to="/UserPage">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="">
              <Nav.Link>📕Book Now.</Nav.Link>
            </LinkContainer>

            <LinkContainer to="">
              <Nav.Link>📖Show Booking</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/UserFeedback">
              <Nav.Link>⭐Fill Feedback</Nav.Link>
            </LinkContainer>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
