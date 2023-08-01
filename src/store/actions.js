// store/actions.js

import { counterSlice } from "./reducer";

// Using reducer slice action creators
export const { increment, decrement } = counterSlice.actions;
