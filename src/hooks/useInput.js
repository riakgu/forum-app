import { useRef, useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export function useBodyInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  const ref = useRef(null);

  const onBodyChangeHandler = (event) => {
    setValue(event.target.innerHTML);
  };

  const reset = () => {
    setValue('');
    if (ref.current) {
      ref.current.innerHTML = '';
    }
  };

  return [value, onBodyChangeHandler, reset, ref];
}

export default useInput;
