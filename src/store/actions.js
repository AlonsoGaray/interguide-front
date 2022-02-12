/* eslint-disable no-unused-vars */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
} from './constants';

import authService from '../services/auth';

// eslint-disable-next-line import/prefer-default-export
export const registerUser = async (dispatch, newUser) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.registerAccount(newUser);
    const data = await response.json();
    if (!response.ok) {
      return data;
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.loginAccount(user);

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({ type: LOGIN_USER, payload: decoded });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem('token');

  dispatch({ type: LOGOUT_USER, payload: null });
};

export const getUserFromLocalStorage = async (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    const decoded = jwt_decode(token);
    const response = await authService.revalidateToken(decoded.email);
    const data = await response.json();

    if (response.status === 401) {
      localStorage.removeItem('token');
      dispatch({ type: LOGOUT_USER, payload: null });
      return 'Your sesion expired, please sign in again';
    }

    if (response.status === 200) {
      localStorage.setItem('token', data);
      const decoded2 = jwt_decode(data);
      dispatch({ type: LOGIN_USER, payload: decoded2 });
    }

    return dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
  return dispatch({ type: LOGOUT_USER, payload: null });
};
