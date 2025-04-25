import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
  name: 'Score',
  initialState: { value: 0 },
  reducers: {
    setScore: (state, action) => {
      state.value = action.payload.score
    }
  }
})


export const { setScore } = ScoreSlice.actions

export default ScoreSlice