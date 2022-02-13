import React from 'react';
import { Link } from 'react-router-dom';
import Container from './styled';

const HomeLeft = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/tags">Tags</Link>
    </Container>
  );
};

export default HomeLeft;
