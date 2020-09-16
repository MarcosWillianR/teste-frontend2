import styled from 'styled-components';
import {
  BORDER_RADIUS_4,
  BORDER_COLOR,
  LABEL_COLOR,
  PLACEHOLDER_COLOR,
  DESKTOP_FONT_SIZE_14,
  DESKTOP_FONT_SIZE_18,
  MAIN_COLOR_DARK
} from '../../../styles/variables';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  flex: 1;

  label {
    display: block;
    font-size: ${DESKTOP_FONT_SIZE_14};
    font-weight: 500;
    line-height: 16px;
    color: ${LABEL_COLOR};
    margin-bottom: 8px;
  }
`;

export const InputContent = styled.div<InputProps>`
  width: 100%;
  border-radius: ${BORDER_RADIUS_4};
  border: 1px solid ${BORDER_COLOR};

  display: flex;
  align-items: center;

  padding: 14px 0;

  input {
    width: 100%;
    padding: 0 14px 0 0;
    border: 0;
    font-size: ${DESKTOP_FONT_SIZE_18};
    color: ${MAIN_COLOR_DARK};
    line-height: 21px;

    &::placeholder {
      color: ${PLACEHOLDER_COLOR};
    }
  }

  svg {
    width: 22px;
    height: 22px;
    margin-left: 14px;
    margin-right: 7px;
  }
`;
