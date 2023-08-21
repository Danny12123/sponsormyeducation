import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* First Footer */}
      <div className="py-5 bg-dark text-light">
        <footer className="container">
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-uppercase">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Terms 
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Blog
                  </a>
                </li>
                <li></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="text-uppercase">Categories</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Animals
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Charity
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Competitions
                  </a>
                </li>

                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    View all <i className="bi-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="text-uppercase">Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Explore
                  </a>
                </li>
                <li></li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Gallery
                  </a>
                </li>
                <li></li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Create Campaign
                  </a>
                </li>
                <li></li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Featured Campaign
                  </a>
                </li>
                <li></li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Login
                  </a>
                </li>
                <li></li>
                <li>
                  <a
                    className="link-footer"
                    href=""
                  >
                    Sign up
                  </a>
                </li>
                <li></li>
                <li className="dropdown">
                  <div className="btn-group dropup">
                    <a
                      className="btn btn-outline-light rounded-pill mt-2 no-hover dropdown-toggle px-4 e-none fw-light"
                      href=""
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-globe mr-1"></i>
                      English{" "}
                    </a>

                    <div className="dropdown-menu dropdown-menu-macos">
                      <a className="dropdown-item dropdown-lang mb-1  active text-white ">
                        <i className="fa fa-check mr-1"></i> English
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-5">
              <Link to="/">
                <img 
                style={{ maxWidth:"10em", maxHeight: 45, borderRadius:10 }}
                src="src\assets\Logo Mockup.jpg" 
                className="align-baseline "
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ut tortor rutrum massa efficitur tincidunt vel nec lacus.
                Curabitur porta aliquet diam, eu gravida neque lacinia in.
                Praesent eget orci id sem commodo aliquet.
              </p>

              <div id="installContainer" className="d-none-custom">
                <button
                  className="btn btn-outline-light w-100 mb-4 mt-3"
                  id="butInstall"
                  type="button"
                >
                  <i className="bi-phone me-1"></i> Install Web App
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Second Footer */}

      <footer className="py-2 bg-dark text-muted">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              © sponsormyeducation.org
            </div>
            <div className="col-md-6 text-right social-links">
              <span className="mr-2">Follow us on</span>
              <ul className="list-inline float-right list-social">
                <li className="list-inline-item">
                  <a
                    href="http://twitter.com/MigueVasquezWeb"
                    className="ico-social"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/MiguelVasquezWeb"
                    className="ico-social"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/miguelvasquezweb"
                    className="ico-social"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
