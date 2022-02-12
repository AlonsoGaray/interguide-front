/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from './styled';
import { logout } from '../../store/actions';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

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
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });

  const myImage = cld.image(user?.photo?.public_id || 'Default-Profile-Photo');

  return (
    <Dropdown>
      <DropdownItem
        redirect="/mi-perfil"
        leftIcon={<AdvancedImage cldImg={myImage} />}
      >
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
