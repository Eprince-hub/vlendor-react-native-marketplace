import {
  SET_SYSTEM_PREFERENCE,
  SET_THEME_MODE,
} from './ThemeContextProvider/themeActions';
import {SET_USER_PROFILE} from './UserContextProvider/userActions';

export type ThemeMode = 'dark' | 'light';
export type UseSystemPreference = 'system' | null;

// Actions
export type ThemeAction =
  | {type: typeof SET_THEME_MODE; payload: ThemeMode}
  | {type: typeof SET_SYSTEM_PREFERENCE; payload: UseSystemPreference};

// Replaces AppState for the initial app state
export type ThemeInitialState = {
  themeMode: ThemeMode;
  useSystemPreference: UseSystemPreference;
};

// initial state type
export type UserProfile = {
  name: string;
  userName: string;
  // other user profile data
} | null;

// Actions
export type UserAction = {type: typeof SET_USER_PROFILE; payload: UserProfile};

// Replaces AppState for the initial app state
export type UserInitialState = {
  userProfile: UserProfile; // TODO: Check to make the user profile more robust
};
