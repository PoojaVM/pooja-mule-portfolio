import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";

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
    <div style={{ width: "100vw", height: "100vh", padding: 0, color: "white"}}>
      <Navbar expand="sm" bg="primary" style={{ backgroundColor: "#C0C0C0" }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/home" style={{ color: "#EFEFEF" }}>Pooja Mule</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">  {/* ms-auto will align nav items to the right */}
              <Nav.Link as={Link} to="/home#about-me" style={{ color: "#EFEFEF" }}>About me</Nav.Link>
              <Nav.Link as={Link} to="/home#work-experience" style={{ color: "#EFEFEF" }}>Work Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Outlet />
      </Container>
    </div>
  );
};

export default React.memo(Layout);
