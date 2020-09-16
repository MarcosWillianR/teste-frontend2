import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import { Input, RadioInput } from '../../components/Form';

import { IconSearch } from '../../components/Icons';
import { MAIN_COLOR_LIGHT } from '../../styles/variables';

import {
  Container,
  GradientContainer,
  TitleContent,
  FormContainer,
  FormContent,
  InputContainer,
  RadioInputContainer,
  ButtonContainer,
  FormValueContainer,
  FormValueContent,
} from './styles';

interface Options {
  id: string;
  value: string;
  label: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const options: Options[] = [
    { id: '1', value: 'dsadsadsadsa', label: 'Ida e volta' },
    { id: '2321', value: 'dsadsa', label: 'Só ida' },
    { id: '321d', value: 'test3213214r1e3', label: 'Só volta' },
  ];

  return (
    <Container>
      <GradientContainer>
        <Header />

        <TitleContent>
          <h1>Viaje pelo mundo inteiro</h1>
          <h2>Aqui você encontra os melhores voos do mundo</h2>
        </TitleContent>
      </GradientContainer>

      <FormContainer>
        <FormContent ref={formRef} onSubmit={handleSubmit}>
          <RadioInputContainer>
            <RadioInput options={options} name="aba" />
          </RadioInputContainer>

          <InputContainer>
            <Input
              name="origin"
              icon="image"
              label="Origem"
              placeholder="Insira a origem"
            />
            <Input
              name="destiny"
              icon="place"
              label="Destino"
              placeholder="Insira a cidade ou destino"
            />
            <Input
              name="date"
              icon="date"
              label="Data de ida / Retorno"
              placeholder="insira as datas de ida e retorno"
            />
            <Input
              name="personsNumber"
              icon="person"
              label="Número de pessoas"
              placeholder="insira o número de pessoas"
            />
          </InputContainer>

          <ButtonContainer>
            <button type="submit">
              <IconSearch size={18} color={MAIN_COLOR_LIGHT} />
                Busque as viagens
              </button>
          </ButtonContainer>
        </FormContent>
      </FormContainer>

      <FormValueContainer>
        <FormValueContent>
          <h2>VALOR DO FORM</h2>
          <span>{'{'}</span>
          <strong>"origem": "São Paulo, Brasil",</strong>
          <strong>"destino": "São Paulo, Brasil",</strong>
          <strong>"data": "Sábado 14/4 - Quinta 19/04",</strong>
          <strong>"pessoas": 1</strong>
          <span>{'}'}</span>
        </FormValueContent>
      </FormValueContainer>
    </Container>
  );
};

export default Home;
