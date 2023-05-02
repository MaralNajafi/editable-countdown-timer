import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SEC_PER_MIN: 60,
  minutes: "00",
  seconds: "00",
  isCounting: false,
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
    setComputedSeconds: (state, action) => {
      state.computedSeconds = action.payload;
        
    },
    decrement: (state) => {
      state.computedSeconds -= 1
    },
    setIsCounting: (state, action) => {
      state.isCounting = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setMinutes, setSeconds, setComputedSeconds, decrement, setIsCounting } =
  counterSlice.actions;

export default counterSlice.reducer;
