import { useSelector } from "react-redux";

export default function useReduxVariables() {
  const minutes = useSelector((state) => state.counter.minutes);
  const seconds = useSelector((state) => state.counter.seconds);
  const hours = useSelector((state) => state.counter.hours);
  const computedSeconds = useSelector((state) => state.counter.computedSeconds);
  const isCounting = useSelector((state) => state.counter.isCounting);
  return {
    seconds,
    minutes,
    computedSeconds,
    isCounting,
    hours,
  };
}
