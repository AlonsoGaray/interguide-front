import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './styled';

const TopQuestions = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>Upvoted Questions</p>
      <button type="button" onClick={() => navigate('/post-question')}>
        Post a Question
      </button>
    </Container>
  );
};

export default TopQuestions;
