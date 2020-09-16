import React, { useState } from 'react';

import { IconMenu, IconLogo } from '../Icons';

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
              <IconLogo size={46} color="#fff" />

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
          <IconLogo size={46} color="#fff" />

          <button
            type="button"
            onClick={() => setMobileNavigationActive(state => !state)}
          >
            <IconMenu size={32} color="#fff" />
          </button>

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
