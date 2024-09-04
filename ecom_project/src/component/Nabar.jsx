// src/components/Navbar.jsx // Optional, if you use React Router
import { Collapse } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navbar1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary justify-items-center">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/6493fc945ac55c5cf0b0243c_Logo.svg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <div className="ml-80">
              <Nav className="me-auto mr-10">
                <Nav.Link href="/" className="mr-4">
                  Home
                </Nav.Link>
                <Nav.Link href="/cart" className="mr-4">
                  Cart
                </Nav.Link>

                <Nav.Link href="/products" className="text-center">
                  Products
                </Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="basic-nav-dropdown"
                  className="text-center"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
            <div className="flex md:flex-row gap-3">
              <img
                src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/649406e3dcc02704d11eb4b6_Cart.svg"
                alt=""
                className="justify-self-end md:ml-64"
              />
              <span className="border rounded-xl px-2 py-1 text-white bg-black">
                0
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
