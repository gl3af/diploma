import React, { useEffect, useRef } from "react";

export const useDebouncedFunc = <A extends unknown[]>(
  callback: (...args: A) => void,
  wait: number,
) => {
  // Отслеживание аргументов и таймера между вызовами
  const argsRef = useRef<A>();
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const cleanup = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  // Очистка таймера при mount-е
  useEffect(() => cleanup, []);

  const debouncedFunc = React.useCallback((...args: A) => {
    argsRef.current = args;

    cleanup();

    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current);
      }
    }, wait);
  }, []);

  return debouncedFunc;
};
