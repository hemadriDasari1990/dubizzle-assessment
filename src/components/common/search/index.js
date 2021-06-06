import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  /* React local states */
  const [debouncedValue, setDebouncedValue] = useState(value);

  /* Rect hooks */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
export default useDebounce;
