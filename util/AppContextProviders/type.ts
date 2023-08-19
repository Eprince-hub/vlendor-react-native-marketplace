import {SET_THEME_MODE} from './ThemeContextProvider/themeActions';
import {SET_USER_PROFILE} from './UserContextProvider/userActions';

export type ThemeMode = 'light' | 'dark' | 'system';

// Actions
export type ThemeAction = {type: typeof SET_THEME_MODE; payload: ThemeMode};

// Replaces AppState for the initial app state
export type ThemeInitialState = {
  themeMode: ThemeMode;
};

// initial state type
export type UserProfile = {
  name: string;
  // other user profile data
};

// Actions
export type UserAction = {type: typeof SET_USER_PROFILE; payload: UserProfile};

// Replaces AppState for the initial app state
export type UserInitialState = {
  userProfile: UserProfile | null; // TODO: Check to make the user profile more robust
};
