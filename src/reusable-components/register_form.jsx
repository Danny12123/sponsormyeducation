 import { createUserWithEmailAndPassword } from "firebase/auth";
 import { auth } from "../firebase";
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";

function RegisterForm() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault()
    try {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
      })
      navigate("/login");
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <div
      className="container"
      style={{ maxWidth: 500, marginTop: "5em", padding: "2em" }}
    >
      <div className="tab-content">
        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
          Register
        </h5>
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form  onSubmit={handleRegister}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control form-control-lg"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
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
              <label className="form-label" htmlFor="phoneNumber">
               Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="form-control form-control-lg"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                Create Campaign
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="text-center">
              <p>
                Alrady a member? <a href="#!">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
