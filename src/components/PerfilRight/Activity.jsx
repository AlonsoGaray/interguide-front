/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Container from './activity';

const Activity = () => {
  const [dataUser, setDataUser] = useState({});

  // useEffect(() => {
  //   setDataUser({
  //     email: user?.email,
  //     emailVerified: user?.email_verified,
  //     name: user?.name,
  //     nickname: user?.nickname,
  //     photo: user?.picture,
  //     sub: user?.sub,
  //   });
  // }, [user]);

  return (
    <Container>
      <p>asd</p>
      <button type="button">hola</button>
    </Container>
  );
};

export default Activity;
