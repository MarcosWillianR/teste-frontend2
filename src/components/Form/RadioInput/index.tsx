import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    checked?: boolean;
    value: string;
    label: string;
  }[];
}

interface Option {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
}

const RadioInput: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find(ref => ref.id === id);

        if (inputRef) {
          inputRef.checked = true;
        }
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked === true);

        if (inputRef) {
          inputRef.checked = false;
        }
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      {options.map(option => (
        <label htmlFor={option.id} key={option.id}>
          <input
            ref={ref => inputRefs.current.push(ref as HTMLInputElement)}
            id={option.id}
            type="radio"
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />
          <span className="custom-radio-button" />
          <strong>{option.label}</strong>
        </label>
      ))}
    </Container>
  );
};

export default RadioInput;
