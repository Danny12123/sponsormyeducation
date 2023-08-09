import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const JumbotronBackground = () => {
  const user = useSelector((state) => state.Campaign.user);
  return (
    <div className="jumbotron jumbotron-fluid ">
      <div className="container-fluid image text-black text-center py-5">
        <h1 className="display-4 mt-5">A little Help Can Make a Difference</h1>
        <h3 className="lead">Sponser My Education Platform</h3>
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
