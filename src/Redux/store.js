import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./slices/LikeSlice";
import cartReducer from "./slices/CartReducer";
export const store = configureStore({
  reducer: {
    liked: likedReducer,
    cart: cartReducer,
  },
});
