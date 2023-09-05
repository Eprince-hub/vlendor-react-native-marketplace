import {UserAction, UserInitialState} from '../type';
import {SET_USER_PROFILE} from './userActions';

export const userReducer = (state: UserInitialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};
