import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 
import procurementReducer from './procurementSlice' 

export const store = configureStore({
  reducer: {
    user: userReducer,
    procurement: procurementReducer
  },
});
