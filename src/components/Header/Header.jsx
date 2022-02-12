/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderContainer, Logo } from './styled';
import { getUserFromLocalStorage } from '../../store/actions';
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchBar from '../SearchBar/SearchBar';
import LoginButton from '../LoginButton/LoginButton';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  useEffect(() => {
    const getUser = async () => {
      await getUserFromLocalStorage(dispatch);
    };
    if (user === null) {
      getUser();
    }
  }, []);

  return (
    <HeaderContainer>
      <Logo>interguide</Logo>
      <SearchBar />
      {user ? (
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
