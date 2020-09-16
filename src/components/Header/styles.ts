import styled from 'styled-components';
import { container } from '../../styles/mixins';
import {
  BORDER_COLOR,
  BORDER_RADIUS_4,
  MAIN_COLOR_DARK,
  MAIN_COLOR_LIGHT,
  LIGHT_COLOR,
  LABEL_COLOR,
} from '../../styles/variables';

interface MobileHeaderContentProps {
  navigationActive: boolean;
}

export const Container = styled.header`
  ${container};
  height: 60px;
  padding: 12px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${BORDER_COLOR};
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

export const DesktopHeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    display: none;
  }

  button {
    background: 0;
    color: ${MAIN_COLOR_LIGHT};
    border: 2px solid ${BORDER_COLOR};
    border-radius: ${BORDER_RADIUS_4};
    padding: 12px;
    transition: color 0.5s linear;

    &:hover {
      color: ${LIGHT_COLOR};
    }
  }

  button:first-of-type {
    margin-right: 24px;
    border: 0;
  }

  ul {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10.5px;
    }

    a {
      margin-right: 24px;
      text-decoration: none;
      color: ${MAIN_COLOR_LIGHT};
      transition: color 0.5s linear;

      &:hover {
        color: ${LIGHT_COLOR};
      }
    }
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
    z-index: 999;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
    top: 70px;

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
