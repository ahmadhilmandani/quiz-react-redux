import { configureStore } from "@reduxjs/toolkit";
import QnASlice from "../redux/QnASlice";
import ScoreSlice from "../redux/ScoreSlice";

export const store = configureStore({
  reducer: {
    qNA: QnASlice.reducer,
    score: ScoreSlice.reducer
  }
})