import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc,collection, addDoc,getDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { auth } from "../firebase";
import { db, storage } from "../firebase";
import { useNavigate ,Link} from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { userProfile } from "../store/reducer";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setProfileImage(file);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !profileImage || !phoneNumber) {
      setError("Please fill out all required fields.");
      return; // Stop further execution
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const storageRef = ref(storage, "images/" + profileImage.name);
      const uploadTask = uploadBytesResumable(storageRef, profileImage);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const UserData = {
            fullName,
            email,
            phoneNumber,
            id:uuidv4(),
            profileImageURL: downloadURL,
          };
  
          // Save user data and profile image URL in Firestore
          const usersCollection = collection(db, "users");
         const newUserRef= await addDoc(usersCollection, UserData);
          const newUserSnapshot = await getDoc(newUserRef)

          if (newUserSnapshot.exists()) {
            const newUserData = newUserSnapshot.data();
            dispatch(userProfile(newUserData))
            console.log("New user data:", newUserData);
            // Now you can use newUserData to access the saved data of the newly added user.
          } else {
            console.log("Document does not exist!");
          }
  
          console.log("UserData sent to Firestore successfully!");
  
          // Optionally, reset the form fields after successful submission
          setFullName("");
          setEmail("");
          setProfileImage(null);
          setPhoneNumber("");
          setPassword("");
        }
      );
  
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  

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
          <form onSubmit={handleRegister}>
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
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                id="image"
                className="form-control form-control-lg"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="pt-1 mb-4">
              <button
                className=" form-control btn btn-dark btn-lg btn-block"
                type="submit"
              >
                Register
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="text-center">
              <p>
                Alrady a member? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
