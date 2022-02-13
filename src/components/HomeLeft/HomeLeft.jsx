import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Categories } from './styled';

const HomeLeft = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Categories>
        <Link to="/questions">Questions</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/tags">Tags</Link>
      </Categories>
    </Container>
  );
};

export default HomeLeft;
