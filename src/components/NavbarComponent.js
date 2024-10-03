import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import Cart from "./Cart"; // Import Cart component


function NavbarComponent({ cartItems, setCartItems }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(atob(token));
      setUser(userData);
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/285/094/original/pizza-logo-with-illustration-a-piece-of-pizza-free-vector.jpg"
              height="30"
              alt="PizzaWeb Logo"
              loading="lazy"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#" active>Home</Nav.Link>
              <Nav.Link href="#">Menu</Nav.Link>
              <Nav.Link href="#">Deals</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>

            <Nav className="ms-auto d-flex align-items-center">
              <Form className="d-flex me-2">
                <FormControl
                  type="search"
                  placeholder="Find your pizza..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark" type="submit">Search</Button>
              </Form>
              
              {user ? (
                <>
                  <Cart cartItems={cartItems} setCartItems={setCartItems} />

                  <NavDropdown
                    title={
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/people-occupation-job/64/Thief-Stealing-Criminal-Robber-Gangster-Robbery-Avatar-1024.png"
                        className="rounded-circle"
                        height="25"
                        width="25"
                        alt="User Avatar"
                      />
                    }
                    id="userDropdown"
                    align="end"
                  >
                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#">Order History</NavDropdown.Item>
                    {user.role === "admin" && (
                      <NavDropdown.Item href="/admin">Admin Dashboard</NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      setIsLoginForm(true);
                      toggleModal();
                    }}
                    className="me-2"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      setIsLoginForm(false);
                      toggleModal();
                    }}
                  >
                    Register
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

      {isLoginForm ? (
        <LoginComponent
          modalOpen={showModal}
          toggleModal={toggleModal}
          switchToRegister={switchForm}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <RegisterComponent
          modalOpen={showModal}
          toggleModal={toggleModal}
          switchToLogin={switchForm}
        />
      )}
    </>
  );
}

export default NavbarComponent;
