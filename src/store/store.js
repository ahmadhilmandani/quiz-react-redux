import { configureStore } from "@reduxjs/toolkit";
import QnASlice from "../features/QnASlice";

export const store = configureStore({
  reducer: {
    qNA: QnASlice.reducer,
  }
})
