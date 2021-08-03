import { useEffect, useState, useMemo } from 'react';
import { db } from 'assets/firebase/firebase';
import { debounce } from 'lodash';

export const useWatchDatabase = (path, value) => {
  const [isValueExists, setIsValueExists] = useState(false);

  const getValue = async () => {
    db.ref(path)
      .get()
      .then((snapshot) => {
        if (value === '') return;
        if (snapshot.exists()) {
          setIsValueExists(true);
        } else {
          setIsValueExists(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const debouncedFunction = useMemo(() => debounce(getValue, 500), [value]);

  useEffect(() => {
    debouncedFunction();
    return () => debouncedFunction.cancel();
  }, [debouncedFunction]);

  return isValueExists;
};
