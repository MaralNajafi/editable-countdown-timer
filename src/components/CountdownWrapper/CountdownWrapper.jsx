import "./CountdownWrapper.css";
import Countdown from "../Countdown/Countdown";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinutes,
  setSeconds,
  setIsCounting,
  setHours,
} from "../../features/counter/counterSlice.js";

export default function CountdownWrapper({ title }) {
  const dispatch = useDispatch();
  const isCounting = useSelector((state) => state.counter.isCounting);
  const computedSeconds = useSelector((state) => state.counter.computedSeconds);

  function handleStart() {
    dispatch(setIsCounting(true));
  }

  function handleStop() {
    dispatch(setIsCounting(false));
  }

  function handleClear() {
    dispatch(setHours("00"));
    dispatch(setMinutes("00"));
    dispatch(setSeconds("00"));
    dispatch(setIsCounting(false));
  }

  return (
    <div className="countdown-wrapper flex flex-col justify-center items-center p-4">
      <h1 className="text-white text-3xl text-center capitalize">{title}</h1>
      <Countdown />
      <div className="flex flex-row justify-center gap-12">
        <Button
          className={"capitalize font-medium rounded-3xl py-2 start-btn"}
          disabled={+computedSeconds === 0 ? true : false}
          onClick={isCounting ? handleStop : handleStart}
        >
          {isCounting ? "stop" : "start"}
        </Button>
        <Button
          className={"capitalize font-medium rounded-3xl py-2 clear-btn"}
          disabled={+computedSeconds === 0 ? true : false}
          onClick={handleClear}
        >
          clear
        </Button>
      </div>
    </div>
  );
}
