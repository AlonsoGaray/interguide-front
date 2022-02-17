/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './activity';

const Activity = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>asd</p>
      <button type="button" onClick={() => navigate('/')}>
        hola
      </button>
    </Container>
  );
};

export default Activity;
