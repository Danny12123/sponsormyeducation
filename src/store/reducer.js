import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Root key for the persisted data
  storage, // Use local storage as the storage engine
  // Add other configurations if needed
};

const initialState = {
  data: [],

  item: {},
  user: null,
  userProfile: {},
  review: {},
  donation:{},
  expires: null,
  boosted: null,
};

export const counterSlice = createSlice({
  name: "Campaign",
  initialState,
  reducers: {
    allCampaign: (state, action) => {
      state.data = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    filteredItem: (state, action) => {
      state.item = action.payload;
    },
    reviewCampaign: (state, action) => {
      state.review = action.payload;
    },
    userProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    ExpiredCampaign: (state, action) => {
      state.expires = action.payload;
    },
    BoostedCampaign: (state, action) => {
      state.boosted = action.payload;
    },
    DonationCampaign:(state,action) => {
      state.donation = action.payload;
    },

    logoutUser: (state) => {
      state.user = null;
    },
  },
});

const rootReducer = combineReducers({
  Campaign: counterSlice.reducer,
  // Add more reducers if needed
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
//export default rootReducer;
export const {
  allCampaign,
  setUser,
  userProfile,
  reviewCampaign,
  ExpiredCampaign,
  toggleLike,
  BoostedCampaign,
  filteredCampaign,
  filteredItem,
  DonationCampaign,
  logoutUser,
} = counterSlice.actions;
