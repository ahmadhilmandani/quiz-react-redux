/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const QnASlice = createSlice({
  name: 'QnA',
  initialState: {
    currentQuestionIndex: 0,
    isLoading: false,
    answer: [],
  },
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload.questionIndex
    },
    setAnswer: (state, action) => {
      state.answer[action.payload.index] = action.payload.answer
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})


export const { setAnswer, setLoading, setCurrentQuestionIndex } = QnASlice.actions

export default QnASlice