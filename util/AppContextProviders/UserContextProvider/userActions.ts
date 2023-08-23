import {UserProfile} from '../type';

// Action Types
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

// User profile action creator
// TODO: Fix this function's TypeScript error on Usage
export const setUserProfile = (userProfile: UserProfile) => ({
  type: SET_USER_PROFILE,
  payload: userProfile,
});
