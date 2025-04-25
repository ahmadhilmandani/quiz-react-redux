/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const QnASlice = createSlice({
  name: 'QnA',
  initialState: {
    isLoading: false,
    answer: [],
  },
  reducers: {
    setAnswer: (state, action) => {
      state.answer[action.payload.index] = action.payload.answer
      console.log(state.answer)
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})


export const { setAnswer, setLoading } = QnASlice.actions

export default QnASlice