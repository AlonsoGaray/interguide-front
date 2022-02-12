import { REGISTER_USER, SET_LOADING, GET_USER_DATA } from './constants';

const initialState = {
  user: null,
};

function reducer(state = initialState, action = '') {
  const newValue = action.payload;
  switch (action.type) {
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
    case GET_USER_DATA: {
      return {
        ...state,
        user: newValue,
      };
    }
    default:
      return state;
  }
}

export default reducer;
