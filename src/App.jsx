import LoginPage from "./pages/login_page";
import HowItWorks from "./pages/how_it_works";
import LatestCampaign from "./pages/latest_page";
import FeaturedPage from "./pages/featured_page";
import PopularPage from "./pages/popular_page";
import GalleryPage from "./pages/gallery_page";
import HomePage from "./pages/home_page";
import CreateCampaign from "./pages/create_campaign_page";
import { Route, Routes } from "react-router-dom";
import CampaignPage from "./pages/campaign_page";
import DonationPage from "./pages/donationPage";
import EndedPage from "./pages/ended_page";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allCampaign } from "./store/reducer";
import { getFirestore, getDocs } from "firebase/firestore";
import { onSnapshot, collection, query } from "firebase/firestore";
import { db } from "./firebase";
import HealthPage from "./pages/health_page";
import BusinessPage from "./pages/business_page";
import ProfilePage from "./pages/profile_page";
import Layout from "../Layout";

function App() {
  const dispatch = useDispatch();
  const [newData, setNewData] = useState([]);
  const fetchDataFromFirestore = async () => {
    const db = getFirestore();
    const campaignsCollection = collection(db, "Campaign");

    try {
      const querySnapshot = await getDocs(campaignsCollection);
      const campaignsData = querySnapshot.docs.map((doc) => doc.data());
      return campaignsData;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };
  useEffect(() => {
    const firestoreData = () => {
      const q = query(collection(db, "Campaign"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const campaigns = [];
        querySnapshot.forEach((doc) => {
          campaigns.push(doc.data());
        });
        setNewData(campaigns);
      });
    };
    firestoreData();
  }, []);

  useEffect(() => {
    dispatch(allCampaign(newData)); // Dispatch inside the effect
  }, [dispatch, newData]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            {" "}
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route
        path="/howitworks"
        element={
          <Layout>
            <HowItWorks />
          </Layout>
        }
      />
      <Route
        path="/latest"
        element={
          <Layout>
            <LatestCampaign />
          </Layout>
        }
      />
      <Route
        path="/featured"
        element={
          <Layout>
            <FeaturedPage />
          </Layout>
        }
      />
      <Route
        path="/popular"
        element={
          <Layout>
            <PopularPage />
          </Layout>
        }
      />
      <Route
        path="/gallery"
        element={
          <Layout>
            <GalleryPage />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <CreateCampaign />
          </Layout>
        }
      />
      <Route
        path="/campaignform"
        element={
          <Layout>
            <CampaignPage />
          </Layout>
        }
      />
      <Route
        path="/donation"
        element={
          <Layout>
            <DonationPage />
          </Layout>
        }
      />
      <Route
        path="/health"
        element={
          <Layout>
            <HealthPage />
          </Layout>
        }
      />
      <Route
        path="/business"
        element={
          <Layout>
            <BusinessPage />
          </Layout>
        }
      />
      <Route
        path="/ended"
        element={
          <Layout>
            <EndedPage />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
