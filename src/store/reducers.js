import {
  REGISTER_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  LOGOUT_USER,
  UPLOAD_FILE,
  GET_ALL_QUESTIONS,
  POST_QUESTION,
  GET_ALL_TAGS,
  POST_COMPANY,
  GET_ALL_COMPANIES,
} from './constants';

const initialState = {
  user: null,
  question: [],
  tagsDB: [],
  companyDB: [],
};

function reducer(state = initialState, action = '') {
  const newValue = action.payload;
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: newValue,
      };
    case LOGOUT_USER: {
      return {
        ...state,
        user: newValue,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        user: newValue,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: newValue,
      };
    }
    case GET_USER_FROM_LOCALSTORAGE: {
      return {
        ...state,
        user: newValue,
      };
    }
    case UPLOAD_FILE: {
      return {
        ...state,
        user: newValue,
      };
    }
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        question: newValue,
      };
    case POST_QUESTION: {
      return {
        ...state,
        question: newValue,
      };
    }
    case GET_ALL_TAGS: {
      return {
        ...state,
        tagsDB: newValue,
      };
    }
    case POST_COMPANY:
      return {
        ...state,
        companyDB: newValue,
      };
    case GET_ALL_COMPANIES:
      return {
        ...state,
        companyDB: newValue,
      };
    default:
      return state;
  }
}

export default reducer;
