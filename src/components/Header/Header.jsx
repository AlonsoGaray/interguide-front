/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useOnclickOutside from 'react-cool-onclickoutside';
import PersonIcon from '@mui/icons-material/Person';
import { HeaderContainer, Logo } from './styled';
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchBar from '../SearchBar/SearchBar';
import LoginButton from '../LoginButton/LoginButton';

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log('🚀 ~ file: Header.jsx ~ line 9 ~ Header ~ user', user);

  const [open, setOpen] = useState(false);
  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  return (
    <HeaderContainer>
      <Logo>interguide</Logo>
      <SearchBar />
      {isAuthenticated ? (
        <NavItem handleClick={() => setOpen(!open)} icon={<PersonIcon />}>
          {open && (
            <div ref={ref}>
              <DropdownMenu />
            </div>
          )}
        </NavItem>
      ) : (
        <LoginButton />
      )}
    </HeaderContainer>
  );
};

export default Header;
