/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PersonIcon from '@mui/icons-material/Person';
import { HeaderContainer, Logo } from './styled';
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchBar from '../SearchBar/SearchBar';
import LoginButton from '../LoginButton/LoginButton';

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log('🚀 ~ file: Header.jsx ~ line 9 ~ Header ~ user', user);

  return (
    <HeaderContainer>
      <Logo>interguide</Logo>
      <SearchBar />
      {isAuthenticated ? (
        <NavItem icon={<PersonIcon />}>
          <DropdownMenu />
        </NavItem>
      ) : (
        <LoginButton />
      )}
    </HeaderContainer>
  );
};

export default Header;
