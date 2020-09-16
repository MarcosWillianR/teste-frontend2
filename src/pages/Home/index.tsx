import React from 'react';

import Header from '../../components/Header';

import { Container, GradientContainer, TitleContent } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <GradientContainer>
        <Header />

        <TitleContent>
          <h1>Viaje pelo mundo inteiro</h1>
          <h2>Aqui você encontra os melhores voos do mundo</h2>
        </TitleContent>
      </GradientContainer>
    </Container>
  );
};

export default Home;
