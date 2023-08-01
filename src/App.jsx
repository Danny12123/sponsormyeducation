
import LoginPage from "./pages/login_page";
import HowItWorks from "./pages/how_it_works";
//import LatestCampaign from "./pages/latest_page";
import FeaturedPage from "./pages/featured_page"; 
import PopularPage from "./pages/popular_page";
import GalleryPage from "./pages/gallery_page";
import HomePage from "./pages/home_page";
import CreateCampaign from "./pages/create_campaign_page";
import { Route,Routes } from "react-router-dom";
import CampaignPage from "./pages/campaign_page";
import DonationPage from "./pages/donationPage";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addCampaign } from "./store/reducer";
import { getFirestore, getDocs } from 'firebase/firestore';
import { onSnapshot, collection, query } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const dispatch = useDispatch()
  const [newDate, setNewDate] = useState([]);
  const fetchDataFromFirestore = async () => {
    const db = getFirestore();
    const campaignsCollection = collection(db, 'Campaign');
    
    try {
      const querySnapshot = await getDocs(campaignsCollection);
      const campaignsData = querySnapshot.docs.map((doc) => doc.data());
      return campaignsData;
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
      return [];
    }
  };
  useEffect(() => {
    // const getData = async () => {
    //   const fetchedCampaigns = await fetchDataFromFirestore();
    //   dispatch(addCampaign(fetchedCampaigns));
    // };

    // getData();
    const deve = () => {
      const q = query(collection(db, "Campaign"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const developers = [];
        querySnapshot.forEach((doc) => {
          developers.push(doc.data());
        });
        setNewDate(developers);
      });
    };
    deve();
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={ <HomePage newDate={ newDate } />}/> 
     <Route path="/login" element={<LoginPage />}/> 
     <Route path="/howitworks" element={<HowItWorks />}/> 
     {/* <Route path="/latest" element={<LatestCampaign />}/>  */}
     <Route path="/featured" element={<FeaturedPage />}/> 
     <Route path="/popular" element={<PopularPage />}/> 
     <Route path="/gallery" element={<GalleryPage />}/> 
     <Route path="/register" element={<CreateCampaign />}/>
     <Route path="/campaignform" element={<CampaignPage />}/>
     <Route path="/donation" element={<DonationPage />} />
    </Routes>
  );
}

export default App;

