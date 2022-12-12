import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    let stored = localStorage.getItem(key);
    let initial = stored || initialValue;
    setValue(initial);
  }, [key, initialValue]);

  const setItem = (newValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, setItem, removeItem];
};

export default useLocalStorage;
