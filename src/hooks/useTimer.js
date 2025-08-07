import { useCallback, useRef, useState } from "react";

export default function useTimer() {
  const [time, setTime] = useState(0);
  const startRef = useRef(0);
  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    startRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      setTime((elapsed / 10).toFixed(0)); // Time in hundredths of a second
    }, 10);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    setTime(0);
  }, []);

  return { time, startTimer, stopTimer, resetTimer };
}
