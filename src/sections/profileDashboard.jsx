import { useSelector } from "react-redux";
import "../profile.css";

function ProfileDashboard() {
  const item = useSelector((state) => state.Campaign.item);
  const user = useSelector((state) => state.Campaign.user);
  

  return (
    <div>
      {item && item.email === user ? (
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-4 mb-sm-5">
                <div className="card card-style1 border-0">
                  <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <img
                          className="img-fluid"
                          src={item.profile?.profileImageURL}
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-6 px-xl-10">
                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                          <h3 className="h2 text-white mb-0">
                            {item.profile.fullName}
                          </h3>
                          {/* <span className="text-primary">Coach</span> */}
                        </div>
                        <ul className="list-unstyled mb-1-9">
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Email:
                            </span>{" "}
                            {item.email}
                          </li>
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Phone:
                            </span>{" "}
                            {item.profile.phoneNumber}
                          </li>
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Location:
                            </span>{" "}
                            {item.profile.location}
                          </li>
                          {/* <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Website:
                            </span>{" "}
                            www.example.com
                          </li>
                          <li className="display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Phone:
                            </span>{" "}
                            507 - 541 - 4567
                          </li> */}
                        </ul>
                        <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                          <li>
                            <a href="#!">
                              <i className="ti-twitter-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="ti-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="ti-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-4 mb-sm-5">
                <div>
                  <span className="section-title text-primary mb-3 mb-sm-4">
                    About Me
                  </span>
                  <p>
                    {item.profile.aboutMe}
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center "><h2>Create a Campaign to See your profile</h2></div>
      )}
    </div>
  );
}

export default ProfileDashboard;
