import { createSlice } from "@reduxjs/toolkit";

export const SEC_PER_MIN = 60;

const initialState = {
  minutes: "00",
  seconds: "00",
  hours: "00",
  isCounting: false,
  computedSeconds: 0,
};

const handleDisplayTime = (time) => {
  if (Number(time) < 10) {
    return `0${time}`;
  }
  return time;
};

// LOGIC MAINLY IN REDUCER

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMinutes: (state, action) => {
      state.minutes = action.payload;
      state.computedSeconds =
        Number(state.minutes) * SEC_PER_MIN + Number(state.seconds);
    },
    setSeconds: (state, action) => {
      state.seconds = action.payload;
      state.computedSeconds =
        Number(state.minutes) * SEC_PER_MIN + Number(state.seconds);
    },
    setHours: (state, action) => {
      state.hours = action.payload;
      state.computedSeconds = Number(state.hours) * SEC_PER_MIN * SEC_PER_MIN;
    },
    setComputedSeconds: (state, action) => {
      state.computedSeconds = action.payload;
    },
    decrement: (state) => {
      state.computedSeconds -= 1;
      state.hours = handleDisplayTime(
        Math.floor(state.computedSeconds / SEC_PER_MIN / SEC_PER_MIN)
      );
      state.minutes = handleDisplayTime(
        Math.floor(state.computedSeconds / SEC_PER_MIN) % SEC_PER_MIN
      );
      state.seconds = handleDisplayTime(state.computedSeconds % SEC_PER_MIN);
      if (state.computedSeconds === 0) {
        state.isCounting = false;
      }
    },
    setIsCounting: (state, action) => {
      state.isCounting = action.payload;
    },
  },
});

export const {
  setMinutes,
  setSeconds,
  setComputedSeconds,
  decrement,
  setIsCounting,
} = counterSlice.actions;

export default counterSlice.reducer;
