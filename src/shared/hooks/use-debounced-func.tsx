import { useEffect, useRef, useCallback } from "react";

export const useDebouncedFunc = <A extends unknown[]>(
  callback: (...args: A) => void,
  wait: number
) => {
  const argsRef = useRef<A>();
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const cleanup = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  useEffect(() => cleanup, []);

  const debouncedFunc = useCallback(
    (...args: A) => {
      argsRef.current = args;

      cleanup();

      timeout.current = setTimeout(() => {
        if (argsRef.current) {
          callback(...argsRef.current);
        }
      }, wait);
    },
    [wait, callback]
  );

  return debouncedFunc;
};
