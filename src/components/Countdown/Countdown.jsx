import { useEffect, useState } from "react";
import "./Countdown.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinutes,
  setSeconds,
  setComputedSeconds,
} from "../../features/counter/counterSlice.js";

export default function Countdown() {
  const minutes = useSelector((state) => state.counter.minutes);
  const seconds = useSelector((state) => state.counter.seconds);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setComputedSeconds());
  }, [minutes, seconds]);

  function handleTimeDisplay(input) {
    if (input !== "" && input !== "00") {
      if (input.length < 2) {
        input = input > 9 ? input : `0${input}`;
      }
    } else {
      input = "00";
    }
    return input;
  }

  return (
    <div className="countdown flex flex-row justify-center items-center text-white text-9xl">
      <input
        className="text-center"
        value={minutes}
        type="text"
        maxLength="2"
        onChange={(event) => {
          const givenMinutes = event.target.value;
          dispatch(setMinutes(givenMinutes.replace(/[^0-9]/g, "")));
        }}
        onBlur={() => {
          dispatch(setMinutes(handleTimeDisplay(minutes)));
        }}
      />
      <span className="font-medium">:</span>
      <input
        className="text-center"
        value={seconds}
        type="text"
        maxLength="2"
        onChange={(event) => {
          const givenSeconds =
            event.target.value <= 59 ? event.target.value : "59";
          dispatch(setSeconds(givenSeconds.replace(/[^0-9]/g, "")));
        }}
        onBlur={() => {
          dispatch(setSeconds(handleTimeDisplay(seconds)));
        }}
      />
    </div>
  );
}
