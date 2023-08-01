import { Link } from "react-router-dom";

const JumbotronBackground = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid image text-white text-center py-5">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <p >
          <Link
            className="btn btn-primary p-2 px-5 btn-lg "
            to="/register"
            role="button"
            style={{marginBottom: "4em"}}
          >
            Create Campaign
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JumbotronBackground;
