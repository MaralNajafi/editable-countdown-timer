import { useSelector } from "react-redux";

export default function useReduxVariables() {
  const SEC_PER_MIN = useSelector((state) => state.counter.SEC_PER_MIN);
  const minutes = useSelector((state) => state.counter.minutes);
  const seconds = useSelector((state) => state.counter.seconds);
  const computedSeconds = useSelector((state) => state.counter.computedSeconds);
  const isCounting = useSelector((state) => state.counter.isCounting);
  return {
    seconds,
    minutes,
    SEC_PER_MIN,
    computedSeconds,
    isCounting,
  };
}
