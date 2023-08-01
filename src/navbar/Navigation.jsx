import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase/index";
import { logoutUser } from "../store/reducer";

function Navigation() {
  const user = useSelector((state) => state.Campaign.user);

  const dispatch = useDispatch();

  function handleLogout() {
    try {
      auth.signOut();
      dispatch(logoutUser());
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <header>
      <Navbar expand="lg" variant="dark" className="bg-dark fixed-top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://fundmescript.com/public/img/logo.png"
              style={{ maxWidth: 100 }}
              className="align-baseline"
              alt="Fundme | Crowdfunding Platform"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/howitworks">How it works</Nav.Link>

              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                {/* <NavDropdown.Item href="/latest">Latest</NavDropdown.Item> */}
                <NavDropdown.Item href="/featured">Featured</NavDropdown.Item>

                <NavDropdown.Item href="/popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <ul className="navbar-nav ms-auto">
              {!user ? (
                <li className="nav-item me-1">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item me-1">
                  <button
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </li>
              )}

              {!user ? (
                <li className="nav-item d-flex justify-start">
                  <Link
                    className="nav-link btn btn-primary btn-create no-hover"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                ""
              )}

              {user && (
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    to="/campaignform"
                  >
                    Create Campaign
                  </Link>
                </li>
              )}
            </ul>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
