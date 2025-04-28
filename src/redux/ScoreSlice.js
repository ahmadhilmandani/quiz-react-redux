import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
  name: 'Score',
  initialState: { value: 0 },
  reducers: {
    setScore: (state) => {
      state.value = state.value + 10
    }
  }
})


export const { setScore } = ScoreSlice.actions

export default ScoreSlice