import React, { useRef, useCallback, useState } from 'react';
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

interface Option {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
}

interface FormData {
  origin: string;
  destiny: string;
  date: string;
  personsNumber: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = useCallback(data => {
    setFormData(data);
  }, []);

  const options: Option[] = [
    { id: '1', value: 'round_trip', label: 'Ida e volta', checked: true },
    { id: '2', value: 'one_way', label: 'Só ida' },
    { id: '3', value: 'just_come_back', label: 'Só volta' },
  ];

  const initialData = {
    origin: 'São Paulo, Brazil',
    date: 'Sábado 14/4 - Quinta 19/04',
    personsNumber: 1,
    radio_btn: '1',
  }

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
        <FormContent ref={formRef} onSubmit={handleSubmit} initialData={initialData}>
          <RadioInputContainer>
            <RadioInput options={options} name="radio_btn" />
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
        {formData && (
          <FormValueContent>
            <h2>VALOR DO FORM</h2>
            <span>{'{'}</span>
            <strong>"origem": "{formData.origin}",</strong>
            <strong>"destino": "{formData.destiny}",</strong>
            <strong>"data": "{formData.date}",</strong>
            <strong>"pessoas": {formData.personsNumber}</strong>
            <span>{'}'}</span>
          </FormValueContent>
        )}
      </FormValueContainer>
    </Container>
  );
};

export default Home;
