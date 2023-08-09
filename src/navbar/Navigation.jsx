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
  
  const userProfile = useSelector((state) => state.Campaign.userProfile);

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
              src="data:image/png;base64,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"
              //src="https://fundmescript.com/public/img/logo.png"
              style={{ maxWidth: 100, maxHeight:45 }}
              className="align-baseline"
              alt="Fundme | Crowdfunding Platform"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              
              <Nav.Link href="/howitworks">How it works</Nav.Link>
              {/* <NavDropdown title="Explore" id="navbarScrollingDropdown" className="d-lg-none">
              <Nav className="flex-column">
                <NavDropdown.Item href="/latest">Latest</NavDropdown.Item>
                <NavDropdown.Item href="/featured">Featured</NavDropdown.Item>
                <NavDropdown.Item href="/popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="/ended">Ended</NavDropdown.Item>
              </Nav>
            </NavDropdown> */}

              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/latest">Latest</NavDropdown.Item>

                <NavDropdown.Item href="/featured">Featured</NavDropdown.Item>

                <NavDropdown.Item href="/popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="/ended">Ended</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">Education</NavDropdown.Item>

                <NavDropdown.Item href="/health">Health</NavDropdown.Item>

                <NavDropdown.Item href="/business">Business</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <ul className="navbar-nav ms-auto mobile-spacing">
            {/* <img
             // src="data:image/png;base64,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"
              src="https://fundmescript.com/public/img/logo.png"
              style={{ maxWidth: 80}}
              className="align-baseline"
              alt="Fundme | Crowdfunding Platform"
            /> */}
              {user && (
                <li className="nav-item d-flex justify-start">
                  <Link
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              )}
              {!user ? (
                <li className="nav-item d-flex justify-start">
                  <Link
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item d-flex justify-start">
                  <button
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </li>
              )}

              {/* {!user ? (
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
              )} */}

              {/* <li className="nav-item">
                  <Link
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    to="/campaignform"
                  >
                    Create Campaign
                  </Link>
                </li> */}
              {user ? (
                // If user is logged in, route to the campaign form
                <li className="nav-item d-flex justify-start">
                  <Link
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    to="/campaignform"
                  >
                    Create Campaign
                  </Link>
                </li>
              ) : (
                // If user is not logged in, route to the login page (you can change the "/login" path to the appropriate login route)
                <li className="nav-item d-flex justify-start">
                  <Link
                    className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                    to="/register"
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
