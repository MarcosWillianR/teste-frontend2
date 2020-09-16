import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import Icon from '../../../utils/getIconByName';

import { Container, InputContent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: 'date' | 'image' | 'place' | 'person';
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, icon, label, ...rest }) => {
  const { fieldName, defaultValue, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <InputContent isFocused={isFocused} isFilled={isFilled}>
        {icon && <Icon name={icon} />}

        <input
          id={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputContent>
    </Container>
  );
};

export default Input;
