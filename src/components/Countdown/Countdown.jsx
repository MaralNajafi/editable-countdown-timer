import { useCallback, useEffect, useRef } from "react";
import "./Countdown.css";
import { useDispatch } from "react-redux";
import useReduxVariables from "../../hooks/useReduxVariables";
import useInterval from "../../hooks/useInterval";
import {
  setMinutes,
  setSeconds,
  setComputedSeconds,
  decrement,
  setIsCounting,
} from "../../features/counter/counterSlice.js";

export default function Countdown() {
  const { seconds, minutes, SEC_PER_MIN, computedSeconds, isCounting } =
    useReduxVariables();
  // let countdownInterval;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setComputedSeconds(minutes * SEC_PER_MIN + Number(seconds)));
  }, [minutes, seconds, dispatch, SEC_PER_MIN]);

  const secondsInputRef = useRef();
  const minutesInputRef = useRef();

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

  const handleTime = useCallback(() => {
    const minutesDisplay = Math.floor(computedSeconds / SEC_PER_MIN);
    const secondsDisplay = Math.floor(computedSeconds % SEC_PER_MIN);

    dispatch(
      setMinutes(minutesDisplay >= 10 ? minutesDisplay : `0${minutesDisplay}`)
    );
    dispatch(
      setSeconds(secondsDisplay >= 10 ? secondsDisplay : `0${secondsDisplay}`)
    );
  }, [SEC_PER_MIN, computedSeconds, dispatch]);

  function handleCountdown() {
    if (isCounting) {
      dispatch(decrement());
    }
  }

  function handleStop() {
    dispatch(setIsCounting(false));
  }

  useEffect(() => {
    isCounting && handleTime();
    +computedSeconds === 0 && dispatch(setIsCounting(false));
  }, [computedSeconds, isCounting, handleTime, dispatch]);

  useInterval(handleCountdown, 1000, isCounting);

  return (
    <div className="countdown flex flex-row justify-center items-center text-white text-9xl">
      <input
        className="text-center"
        ref={minutesInputRef}
        value={minutes}
        type="text"
        maxLength="2"
        onChange={(event) => {
          const givenMinutes = event.target.value;
          dispatch(setMinutes(givenMinutes.replace(/[^0-9]/g, "")));
        }}
        onFocus={() => {
          minutesInputRef.current.select();
          isCounting && handleStop();
        }}
        onBlur={() => {
          dispatch(setMinutes(handleTimeDisplay(minutes)));
        }}
      />
      <span className="font-medium">:</span>
      <input
        className="text-center"
        ref={secondsInputRef}
        value={seconds}
        type="text"
        maxLength="2"
        onChange={(event) => {
          const givenSeconds =
            event.target.value <= 59 ? event.target.value : "59";
          dispatch(setSeconds(givenSeconds.replace(/[^0-9]/g, "")));
        }}
        onFocus={() => {
          secondsInputRef.current.select();
          isCounting && handleStop();
        }}
        onBlur={() => {
          dispatch(setSeconds(handleTimeDisplay(seconds)));
        }}
      />
    </div>
  );
}
