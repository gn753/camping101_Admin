import { useState } from 'react';

// 인풋창 핸들링하는 커스텀훅

const useInput = (
  initalValue: string,
  validator?: (value: string) => boolean
) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (e: { target: { value: string } }) => {
    const {
      target: { value },
    } = e;
    setValue(value as string);
  };
  return { value, onChange };
};
export default useInput;
