/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import {
  SuperContainer,
  DataContainer,
  ProfileImg,
  TabContainer,
} from './styled';

const PerfilLeft = () => {
  return (
    <SuperContainer>
      <DataContainer>
        <ProfileImg src="" />
        <p>name</p>
        <p>email</p>
      </DataContainer>
      <div
        style={{
          borderTop: '2px solid #737373',
        }}
      />
      <TabContainer>
        <Link to="/mi-perfil/">Activity</Link>
        <Link to="/mi-perfil/settings">Settings</Link>
      </TabContainer>
    </SuperContainer>
  );
};

export default PerfilLeft;
