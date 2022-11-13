import { useCallback, useEffect, useRef } from "react";

const useInterval = (fn, ms) => {
  const callback = useCallback(fn, [fn]);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(callback, ms);

    return () => clearInterval(interval.current);
  }, [callback, ms]);
};

export default useInterval;
