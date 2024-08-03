/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const QnASlice = createSlice({
  name: 'QnA',
  initialState: {
    isLoading: false,
    question: [],
    answer: [],
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question.push(action.payload)
    },
    setInitAnswer: (state) => {
      state.answer.push(null)
    },
    setAnswer: (state, action) => {
      state.answer[action.payload.index] = action.payload.answer
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})


export const fetchQuestion = amount => dispatch => {
  
  dispatch(setLoading(true))

  let temptRandomNum = 0
  
  
  axios.get('https://opentdb.com/api.php?amount=10&category=27')
    .then((res) => {
      for (let index = 0; index < res.data.results.length; index++) {
        res.data.results[index].answerOpt = res.data.results[index].incorrect_answers
        
        temptRandomNum = Math.floor(Math.random() * res.data.results[index].incorrect_answers.length)
        res.data.results[index].answerOpt.splice(temptRandomNum, 0, res.data.results[index].correct_answer)
        
        dispatch(setQuestion(res.data.results[index]))
        dispatch(setInitAnswer())
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      dispatch(setLoading(false))

    })
}

export const { setQuestion, setInitAnswer, setAnswer, setLoading } = QnASlice.actions

export default QnASlice