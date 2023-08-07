import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { reviewCampaign } from "../store/reducer";

function Profile({newDate}) {
    const review = useSelector((state) => state.Campaign.review)
    console.log(review.id)
    const dispatch = useDispatch()
  return (
    <div className="container mt-5">
       
      <div className="row">
        <div className="col-md-4">
            <img className="img-fluid" src={review.profile?.profileImageURL}/>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-dark text-white">Profile Information</div>
            <div className="card-body p-5">
              <blockquote className="blockquote mb-0">
                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="row ">
                                <div className="col-5">Name</div>
                                <div className="col-7">{review.profile?.fullName}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row">
                                <div className="col-5"> Last Name:</div>
                                <div className="col-7 ">Zak</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-5">Location:</div>
                                <div className="col-7">Accra</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row">
                                <div className="col-5">Email:</div>
                                <div className="col-7">{review.profile?.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-5">Amount:</div>
                                <div className="col-7">5000</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row">
                                <div className="col-5">Phone:</div>
                                <div className="col-7">{review.profile?.phoneNumber}</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">key</div>
                                <div className="col-6">value</div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="row">
                                <div className="col-6">key</div>
                                <div className="col-6">value</div>
                            </div>
                        </div>
                    </div> */}
                </div>
              </blockquote>
            </div>

          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12"> 
        <div className="row">
          {/* <div className=""></div> */}
          <div className="btn-block text-center mb-5">
        <h1>{review.profile?.fullName} campaigns</h1>  
      </div>
          {newDate.map((item, index) => {
            if (item && (item.profile?.id === review.profile?.id)) {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card campaigns mb-3 shadow-sm fixed-height-card">
                    <Link
                      to="/donation"
                      style={{ TextDecoder: "none", color: "#000" }}
                      onClick={() => {
                        dispatch(reviewCampaign(item));
                      }}
                    >
                      <div className="p-relative">
                        <img
                          className="card-img-top fixed-height-image"
                          src={item?.newImage}
                          alt="Test"
                        />
                      </div>
                      <div className="card-body">
                        <small className="btn-block mb-1">
                          <div className="text-muted">
                            <i className="far fa-folder-open"></i> {item.category}
                          </div>
                        </small>
                        <h5 className="card-title text-truncate">
                          <div className="text-dark">{item.campaignName}</div>
                        </h5>
                        <div className="progress progress-xs mb-4">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "0.00%" }}
                          ></div>
                        </div>
                        <p className="card-text text-truncate">
                          {item?.description}
                        </p>
                        {/* <div className="d-flex justify-content-between align-items-center">
                    <strong>$0</strong>
                    <small className="font-weight-bold">0.00%</small>
                  </div> */}
                        {/* <small className="text-muted">raised of $5,000</small> */}
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-truncate">
                            <img
                              src="https://fundmescript.com/public/avatar/default.jpg"
                              width="25"
                              height="25"
                              className="rounded-circle avatar-campaign"
                            />
                            <small>
                              by <strong>{item?.email}</strong>
                            </small>
                          </span>

                          <small className="text-truncate">
                            <i className="fa fa-infinity text-success"></i>{" "}
                            {`Deadline: ${item.daysRemaining > 0 ? item.daysRemaining:0} days`}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              <div>
                <h3>No campaign</h3>
              </div>
            }
          })}
        </div>         
        </div>
      </div>
    </div>
  );
}

export default Profile;
