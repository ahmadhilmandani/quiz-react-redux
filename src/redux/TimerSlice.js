import { createSlice } from "@reduxjs/toolkit";

const TimerSlice = createSlice({
  name: 'timer',
  initialState: {
    value: 10,
    isActive: false
  },
  reducers: {
    setTimer: (state, action) => {
      state.value = action.payload.timer
    },
    setTimerActive: (state, action) => {
      state.isActive = action.payload.isActive
    }
  }
})


export const { setTimer, setTimerActive } = TimerSlice.actions

export default TimerSlice