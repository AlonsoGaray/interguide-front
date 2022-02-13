import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeLeft from '../../../components/HomeLeft/HomeLeft';
import { Container, RightContainer } from './styled';

const LoggedIn = () => {
  return (
    <Container>
      <HomeLeft />
      <RightContainer>
        <Outlet />
      </RightContainer>
    </Container>
  );
};

export default LoggedIn;
