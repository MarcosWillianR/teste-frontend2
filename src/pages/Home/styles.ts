import styled from 'styled-components';
import { Form } from '@unform/web';
import {
  GRADIENT_BACKGROUND,
  DESKTOP_FONT_SIZE_64,
  MOBILE_FONT_SIZE_48,
  DESKTOP_FONT_SIZE_30,
  MOBILE_FONT_SIZE_24,
  DESKTOP_FONT_SIZE_16,
  MAIN_COLOR_LIGHT,
  SUBTITLE_COLOR,
  BORDER_RADIUS_10,
  BORDER_RADIUS_4,
  LIGHT_COLOR,
  BUTTON_BLUE_BG_COLOR,
} from '../../styles/variables';
import { container } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
`;

export const GradientContainer = styled.div`
  ${GRADIENT_BACKGROUND};
  width: 100%;
  height: 100%;
  max-height: 547px;

  @media screen and (max-width: 760px) {
    background: linear-gradient(180deg, #a0aec0 0%, #718096 100%);
  }
`;

export const TitleContent = styled.div`
  ${container};
  margin-top: 75px;
  text-align: center;

  @media screen and (max-width: 760px) {
    margin-top: 42px;
  }

  h1 {
    font-size: ${DESKTOP_FONT_SIZE_64};
    font-weight: 700;
    line-height: 75px;
    color: ${MAIN_COLOR_LIGHT};
    margin-bottom: 16px;

    @media screen and (max-width: 760px) {
      font-size: ${MOBILE_FONT_SIZE_48};
      line-height: 56px;
    }
  }

  h2 {
    font-size: ${DESKTOP_FONT_SIZE_30};
    font-weight: 400;
    line-height: 35px;
    color: ${SUBTITLE_COLOR};

    @media screen and (max-width: 760px) {
      font-size: ${MOBILE_FONT_SIZE_24};
      line-height: 28px;
    }
  }
`;

export const FormContainer = styled.div`
  ${container};
`;

export const FormContent = styled(Form)`
  width: 100%;
  border-radius: ${BORDER_RADIUS_10};
  background: ${MAIN_COLOR_LIGHT};
  margin-top: 51px;
  height: 100%;
  min-height: 246px;
  position: relative;
  top: 30px;

  @media screen and (max-width: 760px) {
    min-height: 510px;
  }

  box-shadow: 0 20px 18px rgba(0, 0, 0, 0.08);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }

  div {
    max-width: 226px;
    max-height: 48px;

    @media screen and (max-width: 760px) {
      max-width: 100%;
    }

    & + div {
      margin: 0 0 16px 16px;

      @media screen and (max-width: 760px) {
        margin: 0;
        margin-top: 42px;
      }
    }
  }
`;

export const RadioInputContainer = styled.div`
  width: 100%;
  padding: 28px 24px 14px 24px;

  overflow-x: auto;
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  background: ${LIGHT_COLOR};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0 24px;

  button {
    display: flex;
    align-items: center;
    margin-left: auto;
    background: ${BUTTON_BLUE_BG_COLOR};
    border-radius: ${BORDER_RADIUS_4};
    font-size: ${DESKTOP_FONT_SIZE_16};
    font-weight: 500;
    line-height: 19px;
    padding: 14px 18px;
    color: ${MAIN_COLOR_LIGHT};
    transition: opacity 0.5s linear;

    &:hover {
      opacity: 0.9;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
