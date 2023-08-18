import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const JumbotronBackground = () => {
  const user = useSelector((state) => state.Campaign.user);
  return (
    <div className="jumbotron jumbotron-fluid " >
      <div className="container-fluid image text-black text-center py-5 text-bold" style={{height: "20em"}}>
        <h1 className="display-4  " style={{marginTop: "1.7em"}}>Sponser My Education Platform</h1>
        <h3 className="lead">A little Help Can Make a Difference </h3>
        <p>
          {user && (
            <Link
              className="btn btn-primary p-2 px-5 btn-lg "
              to="/campaignform"
              role="button"
              style={{ marginBottom: "4em" }}
            >
              Create Campaign
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default JumbotronBackground;
