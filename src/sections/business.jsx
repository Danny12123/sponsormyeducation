import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reviewCampaign } from "../store/reducer";

function Business() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Campaign.data);
  const user = useSelector((state) => state.Campaign.user);

  const sorted = [...data];
  sorted?.sort((a, b) => b.date - a.date);

  return (
    <div className="section py-5">
      <div className="btn-block text-center mb-5">
        <h1>Explore Business Campaigns</h1>
      </div>
      <div className="container">
        <div className="row">
          {sorted.map((item, index) => {
            if (item && item?.category == "Business") {
              const percentage = (item.donations / item.amount) * 100;
              const to = user ? "/donation" : "/login"
              return (
                <div className="col-md-4" key={index}>
                  <div className="card campaigns mb-3 shadow-sm fixed-height-card">
                    <Link
                      to={to}
                      style={{ TextDecoder: "none", color: "#000" }}
                      onClick={() => {
                        user && dispatch(reviewCampaign(item));
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
                            <i className="far fa-folder-open"></i>{" "}
                            {item.category}
                          </div>
                        </small>
                        <h5 className="card-title text-truncate">
                          <div className="text-dark">{item.campaignName}</div>
                        </h5>
                        <div className="progress progress-xs mb-4">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${percentage.toFixed(2)}%` }}
                          ></div>
                        </div>
                        <p className="card-text text-truncate">
                          {item?.description}
                        </p>
                         <div className="d-flex justify-content-between align-items-center">
                    <strong>₵{item.donations}</strong>
                    <small className="font-weight-bold">{percentage}%</small>
                  </div> 
                        <small className="text-muted">₵{item.donations} raised of ₵{item.amount}</small> 
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
                            {`Deadline: ${
                              item.daysRemaining > 0 ? item.daysRemaining : 0
                            } days`}
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
              </div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Business;
