import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
    key: 'root', // Root key for the persisted data
    storage, // Use local storage as the storage engine
    // Add other configurations if needed
  };



const initialState = {
  data: [],
  user: null,
  review: {}
};

export const counterSlice = createSlice({
  name: "Campaign",
  initialState,
  reducers: {
    addCampaign: (state, action) => {
      state.data.push(action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    reviewCampaign: (state, action) => {
      state.review = action.payload
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

export  const  persistedReducer = persistReducer(persistConfig, rootReducer);
//export default rootReducer;
export const { addCampaign,setUser,reviewCampaign,logoutUser } = counterSlice.actions;
