// eslint-disable-next-line no-unused-vars
import { REGISTER_USER, SET_LOADING, GET_USER_DATA } from './constants';

import userService from '../services/user';

// eslint-disable-next-line import/prefer-default-export
export const createUser = async (dispatch, newUser) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.registerAccount(newUser);
    console.log(
      '🚀 ~ file: actions.js ~ line 11 ~ createUser ~ response',
      response,
    );
    const data = await response.json();
    console.log('🚀 ~ file: actions.js ~ line 12 ~ registerUser ~ data', data);
    if (!response.ok) {
      dispatch({ type: REGISTER_USER, payload: {} });
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
