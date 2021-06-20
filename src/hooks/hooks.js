import {useEffect, useState} from 'react';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case `isEmpty`:
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);

  return {
    isEmpty
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};
