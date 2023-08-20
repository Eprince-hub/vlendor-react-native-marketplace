import {ThemeAction, ThemeInitialState} from '../type';
import {SET_SYSTEM_PREFERENCE, SET_THEME_MODE} from './themeActions';

export const themeReducer = (state: ThemeInitialState, action: ThemeAction) => {
  switch (action.type) {
    case SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      };
    case SET_SYSTEM_PREFERENCE:
      return {
        ...state,
        useSystemPreference: action.payload,
      };
    default:
      return state;
  }
};
