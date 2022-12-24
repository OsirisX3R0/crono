import { useEffect, useState } from "react";

const setInitialValue = (key, initialValue) =>
  localStorage.getItem(key) || initialValue;

const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => setInitialValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, setValue, removeItem];
};

export default useLocalStorage;
