import { configureStore } from "@reduxjs/toolkit";
import QnASlice from "../redux/QnASlice";
import ScoreSlice from "../redux/ScoreSlice";
import TimerSlice from "../redux/TimerSlice";

export const store = configureStore({
  reducer: {
    qNA: QnASlice.reducer,
    score: ScoreSlice.reducer,
    timer: TimerSlice.reducer
  }
})