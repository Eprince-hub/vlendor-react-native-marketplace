import React, {createContext, useContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {
  DefaultTheme,
  MD2DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {getItem, setItem} from '../../util/asyncStorage';

type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  themeMode: ThemeMode;
  theme: any;
  toggleTheme: () => void;
  allowSystemPreference: boolean;
  setAllowSystemPreference: React.Dispatch<React.SetStateAction<boolean>>;
  setItem: (key: string, value: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [allowSystemPreference, setAllowSystemPreference] = useState(false);

  const retrieveThemeMode = async () => {
    try {
      const storedThemeMode = await getItem('themeMode');
      const systemPreference = JSON.stringify(
        Appearance.getColorScheme(),
      ) as ThemeMode;
      if (storedThemeMode) {
        setThemeMode(storedThemeMode as ThemeMode);
      } else {
        setThemeMode(systemPreference);
      }
    } catch (error) {
      console.error('Error retrieving theme mode:', error);
    }
  };

  const toggleTheme = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    setItem('themeMode', newThemeMode);
  };

  useEffect(() => {
    retrieveThemeMode();
  }, [themeMode]);

  // Logic for system preference theme is not working and might be broken
  useEffect(() => {
    const setSystemTheme = async () => {
      const storedThemeMode = await getItem('themeMode');

      const systemPreference = JSON.stringify(
        Appearance.getColorScheme(),
      ) as ThemeMode;

      const storedSystemPreferenceSetting = await getItem(
        'systemPreferenceSetting',
      );

      if (
        allowSystemPreference ||
        (storedSystemPreferenceSetting === 'true' &&
          storedThemeMode !== systemPreference)
      ) {
        setThemeMode(systemPreference);
        setItem('themeMode', systemPreference);
        setAllowSystemPreference(true);
        return;
      }
      setThemeMode(storedThemeMode as ThemeMode);
      setAllowSystemPreference(false);
      setItem('systemPreferenceSetting', 'false');
    };
    setSystemTheme().then(() => {});
  }, [allowSystemPreference]);

  const theme = themeMode === 'dark' ? MD2DarkTheme : DefaultTheme;
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeMode,
        allowSystemPreference,
        setAllowSystemPreference,
        setItem,
      }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
