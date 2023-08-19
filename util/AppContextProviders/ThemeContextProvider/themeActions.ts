import {ThemeMode} from '../type';

// Action Types
export const SET_THEME_MODE = 'SET_THEME_MODE';

// Theme mode action creator
export const setThemeMode = (themeMode: ThemeMode) => ({
  type: SET_THEME_MODE,
  payload: themeMode,
});
