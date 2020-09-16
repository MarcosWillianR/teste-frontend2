import styled from 'styled-components';
import { MAIN_COLOR_DARK, MAIN_COLOR_LIGHT, BORDER_COLOR, LIGHT_COLOR } from '../../../styles/variables';

export const Container = styled.div`
  width: 100%;
  display: flex;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;

    & + label {
      margin-left: 16px;
    }

    strong {
      color: ${MAIN_COLOR_DARK};
      font-weight: 400;
      line-height: 21px;
      margin-left: 33px;
      margin-top: 2px;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    span.custom-radio-button {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: ${LIGHT_COLOR};
      border-radius: 50%;
      border: 3px solid ${BORDER_COLOR};
    }

    & input:checked ~ span {
      border-color: #667EEA;
      background-color: #667EEA;
    }

    span.custom-radio-button:after {
      content: "";
      position: absolute;
      top: 4px;
      left: 4px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: ${MAIN_COLOR_LIGHT};
      display: none;
    }

    & input:checked ~ span:after {
      display: block;
    }
  }
`;
