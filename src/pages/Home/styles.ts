import styled from 'styled-components';
import {
  GRADIENT_BACKGROUND,
  DESKTOP_FONT_SIZE_64,
  MOBILE_FONT_SIZE_48,
  DESKTOP_FONT_SIZE_30,
  MOBILE_FONT_SIZE_24,
  MAIN_COLOR_LIGHT,
  SUBTITLE_COLOR,
} from '../../styles/variables';
import { container } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
`;

export const GradientContainer = styled.div`
  ${GRADIENT_BACKGROUND};

  @media screen and (max-width: 760px) {
    background: linear-gradient(180deg, #a0aec0 0%, #718096 100%);
  }

  width: 100%;
  /* height: 100%; */
  /* max-height: 547px; */
  height: 547px;
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
