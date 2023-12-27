import React, { useEffect } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Logo } from "../assets";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div style={{ width: "100vw", height: "100vh", padding: 0, color: "white", backgroundColor: "black" }}>
      <Navbar
        expand="sm"
        className="main-navbar"
        style={{
          width: "100vw",
          backgroundColor: "#B76E79",
          boxShadow: "0 4px 6px rgba(255, 255, 255, 0.6)", // subtle elevation effect
        }}
      >
        <Container fluid="md">
          <Navbar.Brand
            as={Link}
            to="/home#intro"
            className="logo"
          >
            Pooja Mule
            {/* <img src={Logo} alt="Pooja Mule" style={{ height: "4rem", width: "7rem", marginRight: "0.5rem" }} /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="start"
          >
            {/* <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Canvas Cove
              </Offcanvas.Title>
            </Offcanvas.Header> */}
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/home#about-me" className="nav-item">About me</Nav.Link>
              <Nav.Link as={Link} to="/home#work-experience" className="nav-item">Work Experience</Nav.Link>
              <Nav.Link as={Link} to="/home#projects" className="nav-item">Projects</Nav.Link>
              <Nav.Link as={Link} to="/home#my-skills" className="nav-item">Skills</Nav.Link>
              <Nav.Link as={Link} to="/home#contact-me" className="nav-item">Contact Me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container
        fluid
        style={{
          height: "calc(100vh - 62px)",
          overflow: "auto",
        }}
        // className="d-flex justify-content-center"
      >
        <Outlet />
      </Container>
    </div>
  );
};

export default React.memo(Layout);
