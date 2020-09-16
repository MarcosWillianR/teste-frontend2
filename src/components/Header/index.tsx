import React, { useState } from 'react';

import logo from '../../assets/icons/Logo.svg';
import menuMobileIcon from '../../assets/icons/Menu.svg';

import {
  Container,
  DesktopHeaderContent,
  MobileHeaderContent,
  HeaderContent,
} from './styles';

const Header: React.FC = () => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  return (
    <Container>
      <HeaderContent>
        <DesktopHeaderContent>
          <nav>
            <ul>
              <img src={logo} alt="Viaje pelo mundo inteiro" />

              <li>
                <a href="https://www.codewars.com/">Explore</a>
              </li>

              <li>
                <a href="https://www.codewars.com/">Sobre nós</a>
              </li>

              <li>
                <a href="https://www.codewars.com/">Seguros</a>
              </li>

              <li>
                <a href="https://www.codewars.com/">Hotéis</a>
              </li>
            </ul>
          </nav>

          <div>
            <button type="button">Viagens</button>
            <button type="button">Login</button>
          </div>
        </DesktopHeaderContent>

        <MobileHeaderContent navigationActive={mobileNavigationActive}>
          <button
            type="button"
            onClick={() => setMobileNavigationActive(state => !state)}
          >
            <img src={menuMobileIcon} alt="Abrir Menu" />
          </button>

          <img src={logo} alt="Viaje pelo mundo inteiro" />

          <div>
            <nav>
              <ul>
                <li>
                  <a href="https://www.codewars.com/">Explore</a>
                </li>

                <li>
                  <a href="https://www.codewars.com/">Sobre nós</a>
                </li>

                <li>
                  <a href="https://www.codewars.com/">Seguros</a>
                </li>

                <li>
                  <a href="https://www.codewars.com/">Hotéis</a>
                </li>
              </ul>

              <button type="button">Viagens</button>

              <button type="button">Login</button>
            </nav>
          </div>
        </MobileHeaderContent>
      </HeaderContent>
    </Container>
  );
};

export default Header;
