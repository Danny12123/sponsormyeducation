import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  const [isOpen, setIsOPen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // explore button dropdown
  const toggleOPen = () => setIsOPen(!isOpen);

  //Mobileview Dropdown
   const toggleDropdown = () => {
     setDropdownOpen((prevState) => !prevState);
   };

  

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={ { maxHeight: '100px' } }
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-inverse fixed-top py-3  shadow-sm bg-dark ">
        <div className="container d-flex fw-bold">
          <Link className="navbar-brand" to="/">
            <img
              src="https://fundmescript.com/public/img/logo.png"
              style={{ maxWidth: 100 }}
              className="align-baseline"
              alt="Fundme | Crowdfunding Platform"
            />
          </Link>
          <ul className="navbar-nav ms-auto d-lg-none">
            <li className="nav-item">
              <a className="nav-link search" href="">
                <i className="fa fa-search"></i>
              </a>
            </li>
          </ul>
          <div className={mobileMenu}>
            <button
              className="navbar-toggler text-white"
              type="button"
              
              aria-expanded="false"
             
              data-bs-toggle="dropdown"
              onClick={toggleDropdown}
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/homepage">
                Home
              </Link>
              
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-lg-none text-right">
              <Link
                to=""
                className="close-menu"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
              >
                <i className="fa fa-times"></i>
              </Link>
            </div>

            <ul className="navbar-nav me-auto">
              <li className="nav-item link">
                <Link className="nav-link" to="/howitworks">
                  How it works
                </Link>
              </li>

              <li className="nav-item dropdown " onClick={toggleOPen}>
                <a
                  className="nav-link dropdown-toggle "
                  role="button"
                  href="#"
                  id="dropdownMenu1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <div className={menuClass} aria-labelledby="dropdownMenu1">
                  <Link className="dropdown-item " to="/latest">
                    Latest
                  </Link>
                  <Link className="dropdown-item " to="/featured">
                    Featured
                  </Link>
                  <Link className="dropdown-item " to="/popular">
                    Popular
                  </Link>
                  
                  <Link className="dropdown-item " to="/gallery">
                    Gallery
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownCategories"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu dropdown-menu-macos dd-menu"
                  aria-labelledby="dropdownCategories"
                >
                  <a
                    className="dropdown-item "
                    href="https://fundmescript.com/category/Animals"
                  >
                    Animals
                  </a>
                  <a
                    className="dropdown-item "
                    href="https://fundmescript.com/category/Business"
                  >
                    Business
                  </a>
                  <a
                    className="dropdown-item "
                    href="https://fundmescript.com/category/Charity"
                  >
                    Charity
                  </a>
                  <a
                    className="dropdown-item "
                    href="https://fundmescript.com/category/Community"
                  >
                    Community
                  </a>
                  <a
                    className="dropdown-item "
                    href="https://fundmescript.com/category/Competitions"
                  >
                    Competitions
                  </a>
                  <a
                    className="dropdown-item "
                    href="https://fundmescript.com/category/covid-19"
                  >
                    COVID-19
                  </a>

                  <a
                    className="dropdown-item"
                    href="https://fundmescript.com/categories"
                  >
                    View all <i className="bi-arrow-right"></i>
                  </a>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link search" href="">
                  <i className="fa fa-search"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-1">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                  to="/register"
                >
                  register
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary pr-3 pl-3 btn-create no-hover"
                  to="/campaignform"
                >
                  Create Campaign
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
}

export default Navigation;
