/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './activity';

const Activity = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>Building in progess...</p>
      <button type="button" onClick={() => navigate('/')}>
        Home Page
      </button>
    </Container>
  );
};

export default Activity;
