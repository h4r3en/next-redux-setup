import * as Actions from "../actions";

const initialState = {
  loading: false,
  status: false,
  error: false,
  user: {},
};

const auth = function (state = initialState, action) {
  switch (action.type) {
    case Actions.AUTH_SING_IN_USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case Actions.AUTH_SING_IN_USER: {
      return {
        ...state,
        loading: false,
        status: true,
        user: action.payload,
        error: false,
      };
    }
    case Actions.AUTH_SING_IN_USER_ERROR: {
      return {
        ...state,
        loading: false,
        status: false,
        user: {},
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
