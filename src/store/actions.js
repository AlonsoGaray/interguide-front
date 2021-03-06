// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  UPLOAD_FILE,
  GET_ALL_TAGS,
  GET_ALL_QUESTIONS,
  POST_QUESTION,
  POST_COMPANY,
  GET_ALL_COMPANIES,
  GET_QUESTION_BY_ID,
  PATCH_QUESTION,
  GET_USERS_BY_ID,
  PATCH_USER,
} from './constants';

import authService from '../services/auth';
import userService from '../services/user';
import uploadService from '../services/upload';
import questionService from '../services/question';
import tagService from '../services/tag';
import companyService from '../services/company';

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

export const getUsersById = async (dispatch, userId) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.getUsersById(userId);

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_USERS_BY_ID, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
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

export const patchUserData = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.patchUser(form);
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

export const postUploadFile = async (dispatch, file, user) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await uploadService.postFile(file);

    if (response.status === 200) {
      const userResponse = await userService.patchUser({
        ...user,
        photo: response.data,
      });
      const userData = await userResponse.json();

      if (userResponse.ok) {
        localStorage.setItem('token', userData.token);
        const decoded = jwt_decode(userData.token);
        dispatch({ type: UPLOAD_FILE, payload: decoded });
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getTagsFromDB = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await tagService.getAllTags();

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_TAGS, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getQuestionById = async (dispatch, questionId) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await questionService.getQuestionById(questionId);

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_QUESTION_BY_ID, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getQuestionsFromDB = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await questionService.getAllQuestions();

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_QUESTIONS, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postQuestion = async (dispatch, question) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await questionService.createQuestion(question);

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: POST_QUESTION, payload: data });
      return response;
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const patchQuestion = async (dispatch, answer) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await questionService.patchQuestion(answer);

    if (response.ok) {
      dispatch({ type: PATCH_QUESTION, payload: [] });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const upVoteQuestion = async (dispatch, data) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await questionService.upVoteQuestion(data);

    if (!response.ok) {
      dispatch({ type: PATCH_QUESTION, payload: [] });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const downVoteQuestion = async (dispatch, data) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await questionService.downVoteQuestion(data);

    if (!response.ok) {
      dispatch({ type: PATCH_QUESTION, payload: [] });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postCompany = async (dispatch, company) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await companyService.createCompany(company);

    const data = await (await companyService.getAllCompanies()).json();

    if (response.ok) {
      dispatch({ type: POST_COMPANY, payload: data });
      return response;
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getCompaniesFromDB = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await companyService.getAllCompanies();

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_COMPANIES, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const plusPoints = async (dispatch, userID) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.plusPoints(userID);

    if (!response.ok) {
      dispatch({ type: PATCH_USER, payload: [] });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const lessPoints = async (dispatch, userID) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.lessPoints(userID);

    if (!response.ok) {
      dispatch({ type: PATCH_USER, payload: [] });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
