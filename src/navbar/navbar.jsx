import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOPen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // explore button dropdown
  const toggleOPen = () => setIsOPen(!isOpen);

  //Mobileview Dropdown
   const toggleDropdown = () => {
     setDropdownOpen((prevState) => !prevState);
   };

  const menuClass = `dropdown-menu dropdown-menu-macos dd-menu${
    isOpen ? " show" : ""
  }`;

  const mobileMenu = `dropdown${dropdownOpen ? " show" : ""}`

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-inverse fixed-top py-3  shadow-sm bg-dark ">
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
              // data-bs-toggle="collapse"
              //data-bs-target="#navbarCollapse"
              //aria-controls="navbarCollapse"
              aria-expanded="false"
              // aria-label="Toggle navigation"
              data-bs-toggle="dropdown"
              onClick={toggleDropdown}
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/homepage">
                Home
              </Link>
              {/* <a className="dropdown-item" href="#">
                About
              </a> */}
              {/* Add more dropdown items as needed */}
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
                  {/* <a
                    className="dropdown-item "
                    href="https://fundmescript.com/campaigns/ended"
                  >
                    Ended
                  </a> */}
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
      </nav>
    </header>
  );
}

export default Navbar;
