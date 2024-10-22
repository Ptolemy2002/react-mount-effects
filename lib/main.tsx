import { useEffect, useRef, DependencyList } from "react";

export function useMountEffect(callback: () => void) {
  useEffect(() => {
      callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useUnmountEffect(callback: () => void) {
  useEffect(() => callback, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useDelayedEffect(
  callback: (changeCount: number, reset: () => void) => void,
  deps: DependencyList =[],
  delay=0
) {
  const changeCount = useRef(0);

  useEffect(() => {
      changeCount.current++;
      if (changeCount.current > delay + 1) callback(changeCount.current, () => changeCount.current = 0);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}