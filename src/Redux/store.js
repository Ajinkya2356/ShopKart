import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice";
import sneakerReducer from "../features/Sneakers/sneakerSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    sneaker: sneakerReducer,
  },
});
