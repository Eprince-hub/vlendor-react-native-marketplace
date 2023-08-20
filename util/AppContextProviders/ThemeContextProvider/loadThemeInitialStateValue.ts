import {Appearance} from 'react-native';
import {getItem} from '../../asyncStorage';
import {ThemeMode} from '../type';
import {setSystemPreference, setThemeMode} from './themeActions';

export const loadThemeInitialStateValue = async (
  dispatch: React.Dispatch<any>,
) => {
  try {
    const storedThemeMode = await getItem('themeMode');
    const storedSystemPreference = await getItem('systemPreference');

    // TODO: Check to make the theme mode more robust
    if (storedThemeMode && storedSystemPreference !== 'system') {
      dispatch(setThemeMode(storedThemeMode as ThemeMode));
    } else if (!storedThemeMode || storedSystemPreference === 'system') {
      const systemTheme = Appearance.getColorScheme();
      dispatch(setThemeMode(systemTheme || 'light'));
      dispatch(setSystemPreference('system'));
    }
  } catch (error) {
    // TODO: Add error handling
    // For now swallow error and log to console
    // TODO: implement robust error handling and logging
    console.error('Error loading initial theme state:', error);
  }
};
