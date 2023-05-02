import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SEC_PER_MIN: 60,
  minutes: "00",
  seconds: "00",
  computedSeconds: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMinutes: (state, action) => {
      state.minutes = action.payload;
    },
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    setComputedSeconds: (state) => {
      state.computedSeconds = state.minutes * state.SEC_PER_MIN + Number(state.seconds);
      console.log(state.computedSeconds);
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMinutes, setSeconds, setComputedSeconds } = counterSlice.actions;

export default counterSlice.reducer;
