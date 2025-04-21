import { useEffect, useState } from "react";

export const UseDebounce = (value, delay) => {
  const [debouncedValue, setDeboucedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return debouncedValue;
};

// The useDebounce hook in React is used to delay the execution
// of a function or state update until a specified amount of time
//  has passed without any further changes to its input value.
