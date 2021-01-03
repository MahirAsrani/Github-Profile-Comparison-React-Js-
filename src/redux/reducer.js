import { PROFILE_LOADED, LOADING } from './actionTypes';
const initialState = {
  loading: false,
  loaded: false,
  user1: {},
  user2: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_LOADED:
      return {
        ...state,
        loading: false,
        loaded: true,
        user1: payload.user1,
        user2: payload.user2,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    default:
      return state;
  }
};
