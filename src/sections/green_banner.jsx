function GreenBanner() {
  return (
    <div className="py-5 bg-success text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex py-3 my-3 my-lg-0 justify-content-center">
              <span className="mr-3 display-4">
                <i className="fa fa-users align-baseline"></i>
              </span>
              <div>
                <h3 className="mb-0">
                  <span className="counter">2,075</span>
                </h3>
                <h5 className="font-weight-light text-uppercase">Members</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex py-3 my-3 my-lg-0 justify-content-center">
              <span className="mr-3 display-4">
                <i className="fa fa-bullhorn align-baseline"></i>
              </span>
              <div>
                <h3 className="mb-0">
                  <span className="counter">1,241</span>
                </h3>
                <h5 className="font-weight-light text-uppercase">Campaigns</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex py-3 my-3 my-lg-0 justify-content-center">
              <span className="mr-3 display-4">
                <i className="fa fa-hand-holding-usd align-baseline"></i>
              </span>
              <div>
                <h3 className="mb-0">
                  {" "}
                  $<span className="counter">2,901,928</span>
                </h3>
                <h5 className="font-weight-light text-uppercase">
                  Funds Raised
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenBanner;
