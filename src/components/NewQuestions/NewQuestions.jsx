import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './styled';

const NewQuestions = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>New Questions</p>
      <button type="button" onClick={() => navigate('/post-question')}>
        Post a Question
      </button>
    </Container>
  );
};

export default NewQuestions;
