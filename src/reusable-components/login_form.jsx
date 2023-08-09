import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {Link}  from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUser } from "../store/reducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {

    e.preventDefault();

    if ( !email || !password ) {
      setError("Please fill out all required fields.");
      return; // Stop further execution
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const firebaseUser = userCredential.user;
      dispatch(setUser(firebaseUser.email));
      navigate("/");
    })
    .catch((error) => {
      setError(error.message);
    });
    // try {
    //   signInWithEmailAndPassword(auth, email, password).then(
    //     (userCredential) => {
    //       const firebaseUser = userCredential.user;
    //       dispatch(setUser(firebaseUser.email));
    //       navigate("/")
    //     }
    //   );
    // } catch (error) {
    //   console.log(error)
    //   setError(error.message);
    // }
  };

  return (
    <div
      className="container"
      style={{ maxWidth: 500, marginTop: "5em", padding: "2em" }}
    >
      <div className="tab-content">
        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
          Sign into your account
        </h5>
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleSignIn}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="pt-1 mb-4">
              <button
                className=" form-control btn btn-dark btn-lg btn-block"
                type="submit"
              >
                Login
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="text-center">
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
