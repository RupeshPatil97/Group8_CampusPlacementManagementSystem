import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <div className="jumbotron p-3 text-white text-center border-bottom mb-0 bg-dark fixed=top">
          <h4>Campus Placement Management System</h4>

          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto ">
                <Nav.Link className="text-white" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" as={Link} to="/aboutUs">
                  About Us
                </Nav.Link>
                <Nav.Link className="text-white" as={Link} to="/contactUs">
                  Contact Us
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="text-white" as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
