import {  useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch,useSelector } from "react-redux";
//import { addCampaign} from '../store/reducer';
import { useNavigate } from "react-router-dom";
//import firebase from 'firebase/app';
import { db, storage } from "../firebase";
import "firebase/firestore";
import "firebase/storage";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css"; 
import { BoostedCampaign } from "../store/reducer";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";



function CampaignForm() {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [newImage, setNewImage] = useState("");
  const [urlImage, setUrlImage] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.Campaign.user)
  const [category, setCategory] = useState("")
  //const review = useSelector((state) => state.Campaign.review)
  const { likes } = useSelector((state) => state.Campaign);
  const userProfile = useSelector((state) => state.Campaign.userProfile);
  
  const dispatch = useDispatch()


  //const dispatch = useDispatch()
  const handleFileInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage(file);
    
  };

  function calculateDaysRemaining(endDate) {
    // Get the current date and set the time to midnight (00:00:00)
    const currentDate = new Date();
    //console.log(currentDate);
  
    let endDateObject = new Date(endDate);
    //console.log(endDateObject);
  
    const timeDifference = endDateObject - currentDate;
    console.log();
  
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysRemaining;
  }
  
  const daysRemaining = calculateDaysRemaining(endDate);


  
  const handleCampaign = async (e) => {
    e.preventDefault();

    const storageRef = ref(storage, "images/ " + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(progress)
      },
      (err) => console.log(err),
      async() => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
        const newCampaignData = {
          campaignName: campaignName,
          description: description,
          newImage: downloadURL, 
          amount:amount,
          email: user,
          date: Date.now(),
          endDate:endDate,
          daysRemaining:daysRemaining,
          likes:0,
          likesBy:[],
          boosted: false,
          category:category,
          profile:userProfile,
          id: uuidv4(),
        };

        try {
          await setDoc(doc(db, "Campaign", newCampaignData.id ), newCampaignData);
          dispatch(BoostedCampaign(newCampaignData.id))
          alert("Data sent to Firestore successfully!");
          // Optionally, reset the form fields after successful submission
          setCampaignName('');
          setDescription('');
          setImage(null)
          setAmount(null);
          setEndDate(null)
          navigate("/")
        } catch (error) {
          console.error("Error sending data to Firestore:", error);
        }
        
      }
    );
  };

  


  return (
    <div
      className="container"
      style={{ maxWidth: 500, marginTop: "5em", padding: "2em" }}
    >
      <div className="tab-content">
        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
          Campaign
        </h5>
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleCampaign}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="CampaignName">
                Campaign Name
              </label>
              <input
                type="text"
                id="CampaignName"
                className="form-control form-control-lg"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="form-control form-control-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

            <div className="form-outline mb-4 ">
              <label className="form-label" htmlFor="amount">
                Campaign Goal
              </label>
              <input
                type="number"
                id="amount"
                className="form-control form-control-lg"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="endDate">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="form-control form-control-lg"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
            <div className="form-outline mb-4">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="form-control form-control-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Business">Business</option>
            {/* Add more options as needed */}
          </select>

              </div>

            <div className="pt-1 mb-4">
              <button
                className=" form-control btn btn-dark btn-lg btn-block"
                type="submit"
              >
                Create Campaign
              </button>
            </div>

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

export default CampaignForm;
