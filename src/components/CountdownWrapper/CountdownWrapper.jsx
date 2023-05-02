import "./CountdownWrapper.css";
import Countdown from "../Countdown/Countdown";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setIsCounting } from "../../features/counter/counterSlice.js";

export default function CountdownWrapper({ title }) {
  const dispatch = useDispatch();
  const isCounting = useSelector((state) => state.counter.isCounting);

  function handleStart() {
    dispatch(setIsCounting(true));
  }

  function handleStop() {
    dispatch(setIsCounting(false));
  }

  return (
    <div className="countdown-wrapper p-4">
      <h1 className="text-white text-3xl text-center capitalize">{title}</h1>
      <Countdown />
      <div className="flex flex-row justify-center gap-12">
        <Button
          disabled={false}
          onClick={isCounting ? handleStop : handleStart}
        >
          {isCounting ? "stop" : "start"}
        </Button>
        <Button disabled={true}>clear</Button>
      </div>
    </div>
  );
}
