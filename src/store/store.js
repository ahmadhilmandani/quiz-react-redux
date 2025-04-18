import { configureStore } from "@reduxjs/toolkit";
import QnASlice from "../redux/QnASlice";

export const store = configureStore({
  reducer: {
    qNA : QnASlice.reducer
  }
})