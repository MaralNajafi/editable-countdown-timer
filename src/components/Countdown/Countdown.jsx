import { useRef } from "react";
import "./Countdown.css";
import { useDispatch } from "react-redux";
import useReduxVariables from "../../hooks/useReduxVariables";
import useInterval from "../../hooks/useInterval";
import {
  setMinutes,
  setSeconds,
  setHours,
  decrement,
  setIsCounting,
} from "../../features/counter/counterSlice.js";

export default function Countdown() {
  const secondsInputRef = useRef();
  const minutesInputRef = useRef();
  const hoursInputRef = useRef();

  const { seconds, minutes, isCounting, hours } = useReduxVariables();
  const dispatch = useDispatch();

  const handleBlur = (time) => {
    if (time !== "" && time !== "00") {
      if (time.length < 2) {
        time = time > 9 ? time : `0${time}`;
      }
    } else {
      time = "00";
    }
    return time;
  };

  function handleCountdown() {
    if (isCounting) {
      dispatch(decrement());
    }
  }

  const handleStop = () => {
    dispatch(setIsCounting(false));
  };

  useInterval(handleCountdown, 1000, isCounting);

  return (
    <div className="countdown flex flex-row justify-center items-center text-white text-9xl">
      <input
        className="text-center"
        ref={hoursInputRef}
        value={hours}
        type="text"
        maxLength="2"
        onChange={(event) => {
          const givenHours = event.target.value;
          dispatch(setHours(givenHours.replace(/[^0-9]/g, "")));
        }}
        onFocus={() => {
          hoursInputRef.current.select();
          isCounting && handleStop();
        }}
        onBlur={() => {
          dispatch(setHours(handleBlur(hours)));
        }}
      />
      <span className="font-medium">:</span>
      <input
        className="text-center"
        ref={minutesInputRef}
        value={minutes}
        type="text"
        maxLength="2"
        onChange={(event) => {
          const givenMinutes =
            event.target.value <= 59 ? event.target.value : "59";
          dispatch(setMinutes(givenMinutes.replace(/[^0-9]/g, "")));
        }}
        onFocus={() => {
          minutesInputRef.current.select();
          isCounting && handleStop();
        }}
        onBlur={() => {
          dispatch(setMinutes(handleBlur(minutes)));
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
          dispatch(setSeconds(handleBlur(seconds)));
        }}
      />
    </div>
  );
}
