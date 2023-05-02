import "./CountdownWrapper.css";
import Countdown from "../Countdown/Countdown";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { setIsCounting } from "../../features/counter/counterSlice.js";

export default function CountdownWrapper({ title }) {
  const dispatch = useDispatch();

  function handleStart() {
    dispatch(setIsCounting(true));
  }
  return (
    <div className="countdown-wrapper p-4">
      <h1 className="text-white text-3xl text-center capitalize">{title}</h1>
      <Countdown />
      <div className="flex flex-row justify-center gap-12">
        <Button disabled={false} onClick={handleStart}>
          start
        </Button>
        <Button disabled={true}>clear</Button>
      </div>
    </div>
  );
}
