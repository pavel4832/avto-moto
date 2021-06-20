import {useEffect, useState} from 'react';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      if (validations.hasOwnProperty(validation)) {
        switch (validation) {
          case `isEmpty`:
            if (value) {
              setEmpty(false);
            } else {
              setEmpty(true);
            }
            break;
        }
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
