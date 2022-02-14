import {
  REGISTER_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  LOGOUT_USER,
  UPLOAD_FILE,
  POST_QUESTION,
  GET_ALL_TAGS,
} from './constants';

const initialState = {
  user: null,
  question: {},
  tagsDB: [],
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
    default:
      return state;
  }
}

export default reducer;
