import styled from 'styled-components';
import { GRADIENT_BACKGROUND } from '../../styles/variables';

export const Container = styled.div``;

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
