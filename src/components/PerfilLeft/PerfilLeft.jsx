/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import {
  SuperContainer,
  DataContainer,
  ProfileImg,
  TabContainer,
} from './styled';

const PerfilLeft = () => {
  const { user } = useAuth0();

  return (
    <SuperContainer>
      <DataContainer>
        <ProfileImg src={user?.picture} />
        <p>{user?.name}</p>
        <p>{user?.email}</p>
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
