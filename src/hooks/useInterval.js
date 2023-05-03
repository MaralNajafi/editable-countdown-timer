import { useRef, useEffect } from "react";

const useInterval = (callback, delay, dependency) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [...dependency]);
};

export default useInterval;
