import React from 'react';

import Header from '../../components/Header';

import { Container, GradientContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <GradientContainer>
        <Header />
      </GradientContainer>
    </Container>
  );
};

export default Home;
