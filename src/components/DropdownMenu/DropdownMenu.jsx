/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { Dropdown, ProfileImg } from './styled';

const DropdownItem = ({ children, leftIcon, handleClick, redirect }) => {
  return (
    <Link to={redirect} className="menu-item" onClick={handleClick}>
      <span className="icon-button">{leftIcon}</span>
      &nbsp;&nbsp;
      {children}
    </Link>
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
      <DropdownItem
        redirect="/mi-perfil"
        leftIcon={<ProfileImg src={picture} />}
      >
        {user.name}
        <br />
        &nbsp;&nbsp; My Profile
      </DropdownItem>
      <DropdownItem
        redirect=""
        handleClick={() => logoutWithRedirect()}
        leftIcon={<LogoutIcon />}
      >
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownMenu;
