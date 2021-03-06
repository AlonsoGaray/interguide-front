/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo } from './styled';
import socket from '../../utils/socket';
import {
  getUserFromLocalStorage,
  getCompaniesFromDB,
  getTagsFromDB,
} from '../../store/actions';
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import LoginButton from '../LoginButton/LoginButton';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [userSocket, setUserSocket] = useState();
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

    const getCompanies = async () => {
      await getCompaniesFromDB(dispatch);
    };
    getCompanies();

    const getTags = async () => {
      await getTagsFromDB(dispatch);
    };
    getTags();
    // setUserSocket(user);
  }, []);

  useEffect(() => {
    setUserSocket(user);
    socket.on('user:update', (data) => {
      if (user?.id === data._id) {
        setUserSocket(data);
      }
    });

    return () => {
      socket.off('user:update');
    };
  }, [user]);

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>interguide</Logo>
      {/* {user ? (
        <Link className="quiz" to="/quiz">
          Take a Quiz
        </Link>
      ) : (
        <Link className="quiz" to="/register">
          Take a Quiz
        </Link>
      )} */}
      {user ? (
        <>
          <p>Points: {userSocket ? userSocket.points : '0'}</p>
          <NavItem handleClick={() => setOpen(!open)} icon={<PersonIcon />}>
            {open && (
              <div ref={ref}>
                <DropdownMenu />
              </div>
            )}
          </NavItem>
        </>
      ) : (
        <LoginButton />
      )}
    </HeaderContainer>
  );
};

export default Header;
