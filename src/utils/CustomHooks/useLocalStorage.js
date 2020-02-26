import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    } catch (e) {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [localStorageValue, key]);

  return [
    localStorageValue,
    setLocalStorageValue
  ];
};

export default useLocalStorage;
