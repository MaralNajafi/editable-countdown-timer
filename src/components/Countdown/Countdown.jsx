import { useEffect, useState } from "react";
import "./Countdown.css";
export default function Countdown() {
  const SEC_PER_MIN = 60;
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  let [computedSeconds, setComputedSeconds] = useState();

  useEffect(() => {
    setComputedSeconds(minutes * SEC_PER_MIN + Number(seconds));
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
          setMinutes(givenMinutes.replace(/[^0-9]/g, ""));
        }}
        onBlur={() => {
          setMinutes(handleTimeDisplay(minutes));
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
          setSeconds(givenSeconds.replace(/[^0-9]/g, ""));
        }}
        onBlur={() => {
          setSeconds(handleTimeDisplay(seconds));
        }}
      />
    </div>
  );
}
