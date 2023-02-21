import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>(() => ({}));

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => {
      savedCallback && savedCallback.current();
    };
    if (delay === null) {
      return () => ({});
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
