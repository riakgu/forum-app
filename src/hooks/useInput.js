import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export function useBodyInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onBodyChangeHandler = (event) => {
    setValue(event.target.innerHTML);
  };

  return [value, onBodyChangeHandler];
}

export default useInput;
