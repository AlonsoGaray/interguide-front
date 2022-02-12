/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dropdown, ProfileImg } from './styled';
import { logout } from '../../store/actions';

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
  const dispatch = useDispatch();

  return (
    <Dropdown>
      <DropdownItem redirect="/mi-perfil" leftIcon={<ProfileImg src="" />}>
        <br />
        &nbsp;&nbsp; My Profile
      </DropdownItem>
      <DropdownItem
        redirect="/"
        handleClick={() => logout(dispatch)}
        leftIcon={<LogoutIcon />}
      >
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownMenu;
