/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './activity';

const Activity = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>Building in progess...</p>
      <div className="buttons">
        <button type="button" onClick={() => navigate('/')}>
          Home Page
        </button>
        <button type="button" onClick={() => navigate('/mi-perfil/settings')}>
          Profile Settings
        </button>
      </div>
    </Container>
  );
};

export default Activity;
