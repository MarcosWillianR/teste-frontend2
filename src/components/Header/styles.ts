import styled from 'styled-components';
import { container } from '../../styles/mixins';
import {
  BORDER_COLOR,
  MAIN_COLOR_DARK,
  LABEL_COLOR,
} from '../../styles/variables';

interface MobileHeaderContentProps {
  navigationActive: boolean;
}

export const Container = styled.header`
  ${container};
  height: 60px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${BORDER_COLOR};
`;

export const DesktopHeaderContent = styled.div`
  display: flex;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const MobileHeaderContent = styled.div<MobileHeaderContentProps>`
  width: 100%;
  display: none;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 760px) {
    display: flex;
  }

  > button {
    background: none;
    padding: 12px 12px 12px 0;
  }

  div {
    width: 100%;
    background: #fff;
    display: ${props => (props.navigationActive ? 'flex' : 'none')};
    padding: 12px;
    justify-content: center;
    position: absolute;
    top: 50px;

    button {
      display: block;
      margin-top: 22px;
    }

    a {
      display: block;
      text-decoration: none;
      margin-bottom: 22px;
    }

    button,
    a {
      background: 0;
      width: 100%;
      padding: 12px 16px;
      text-align: left;
      color: ${MAIN_COLOR_DARK};
      transition: color 0.5s linear;

      &:hover {
        color: ${LABEL_COLOR};
      }
    }
  }
`;
