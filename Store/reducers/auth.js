import {USER_REGISTERED, USER_LOGGED_OUT} from '../constants/actiontypes';

const INIT_STATE = {
  auth: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {
        ...state,
        auth: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};
