import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, duration: number = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), duration || 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, value]);
  return debouncedValue;
}
