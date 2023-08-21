import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase/index";
import { logoutUser } from "../store/reducer";

function Navigation({category}) {
  const user = useSelector((state) => state.Campaign.user);
  const userProfile = useSelector((state) => state.Campaign.userProfile);

  const categoryLogos = {
    education: "src/assets/Logo Mockup.jpg",
    health: "src/assets/Crowdfunding 6.jpg",
    business: "src/assets/Crowdfunding 6.jpg",
    // Add more categories and logo URLs as needed
  };

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
              src={categoryLogos[category] || "src/assets/Logo Mockup.jpg"}
              style={{ width: 50, height: 50, borderRadius: 50 }}
              className="align-baseline "
              alt="sponsormyeducation"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="/howitworks">How it works</Nav.Link>

              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/latest" class>Latest</NavDropdown.Item>

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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
