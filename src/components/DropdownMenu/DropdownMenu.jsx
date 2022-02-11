/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dropdown, ProfileImg } from './styled';

const DropdownItem = ({ children, leftIcon, handleClick }) => {
  return (
    <a href="#" className="menu-item" onClick={handleClick}>
      <span className="icon-button">{leftIcon}</span>
      {children}
    </a>
  );
};

const DropdownMenu = () => {
  const { user, logout } = useAuth0();
  const { picture } = user;
  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Dropdown>
      <DropdownItem leftIcon={<ProfileImg src={picture} />}>
        My Profile
      </DropdownItem>
      <DropdownItem
        handleClick={() => logoutWithRedirect()}
        leftIcon={<LogoutIcon />}
      >
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownMenu;
