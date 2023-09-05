import {ThemeAction, ThemeMode, UseSystemPreference} from '../type';

// Action Types
export const SET_THEME_MODE = 'SET_THEME_MODE';
export const SET_SYSTEM_PREFERENCE = 'SET_SYSTEM_PREFERENCE';

// Theme mode action creator
export const setThemeMode = (themeMode: ThemeMode): ThemeAction => ({
  type: SET_THEME_MODE,
  payload: themeMode,
});

// System preference action creator
export const setSystemPreference = (
  systemPreference: UseSystemPreference,
): ThemeAction => ({
  type: SET_SYSTEM_PREFERENCE,
  payload: systemPreference,
});
