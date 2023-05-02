import { useEffect } from "react";
import "./Countdown.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinutes,
  setSeconds,
  setComputedSeconds,
  decrement,
  setIsCounting,
} from "../../features/counter/counterSlice.js";

export default function Countdown() {
  let countdownInterval;
  const SEC_PER_MIN = useSelector((state) => state.counter.SEC_PER_MIN);
  const minutes = useSelector((state) => state.counter.minutes);
  const seconds = useSelector((state) => state.counter.seconds);
  const computedSeconds = useSelector((state) => state.counter.computedSeconds);
  const isCounting = useSelector((state) => state.counter.isCounting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setComputedSeconds(minutes * SEC_PER_MIN + Number(seconds)));
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

  function handleTime() {
    const minutesDisplay = Math.floor(computedSeconds / SEC_PER_MIN);
    const secondsDisplay = Math.floor(computedSeconds % SEC_PER_MIN);

    dispatch(
      setMinutes(minutesDisplay >= 10 ? minutesDisplay : `0${minutesDisplay}`)
    );
    dispatch(
      setSeconds(secondsDisplay >= 10 ? secondsDisplay : `0${secondsDisplay}`)
    );
  }

  function handleCountdown() {
    if (isCounting) {
      dispatch(decrement());
    }
  }

  useEffect(() => {
    isCounting && handleTime();
    +computedSeconds === 0 && dispatch(setIsCounting(false));
  }, [computedSeconds, isCounting]);

  useEffect(() => {
    countdownInterval = setInterval(handleCountdown, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCounting]);

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
