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
  user: null,
  userProfile:{},
  review: {},
  expires: null,
  boosted:null
};

export const counterSlice = createSlice({
  name: "Campaign",
  initialState,
  reducers: {
    // addCampaign: (state, action) => {
    //   state.data.push(action.payload);
    // },
    setUser: (state, action) => {
      state.user = action.payload;
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
    // toggleLike: (state) => {
    //   state.liked = !state.liked; // Toggle the liked state first
    //   if (state.liked) {
    //     state.likes++;
    //     // Increment the likes count if liked is true
    //   } else {
    //     // Decrease the likes count only if it's greater than zero
    //     if (state.likes > 0) {
    //       state.likes--;
    //     }
    //   }
    //   },
    logoutUser: (state) => {
      state.user = null;
    },
}});

const rootReducer = combineReducers({
  Campaign: counterSlice.reducer,
  // Add more reducers if needed
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
//export default rootReducer;
export const {
  addCampaign,
  setUser,
  userProfile,
  reviewCampaign,
  ExpiredCampaign,
  toggleLike,
  BoostedCampaign,
  logoutUser,
} = counterSlice.actions;
