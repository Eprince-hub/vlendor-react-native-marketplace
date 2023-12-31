import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {adaptNavigationTheme, PaperProvider} from 'react-native-paper';
import {NavigationTheme} from 'react-native-paper/lib/typescript/types';
import {darkTheme, lightTheme} from '../../styles/colorThemes';
import {ThemeAction, ThemeInitialState} from '../type';
import {loadThemeInitialStateValue} from './loadThemeInitialStateValue';
import {themeInitialState} from './themeInitialState';
import {themeReducer} from './themeReducer';

type AppTheme = typeof lightTheme | typeof darkTheme;

const ThemeContext = createContext<
  | {
      themeState: ThemeInitialState;
      themeDispatch: React.Dispatch<ThemeAction>;
      appTheme: AppTheme;
    }
  | undefined
>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState,
  );

  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    reactNavigationLight: lightTheme as unknown as NavigationTheme,
    reactNavigationDark: darkTheme as unknown as NavigationTheme,
  });

  const navigationTheme =
    themeState.themeMode === 'dark' ? DarkTheme : LightTheme;

  // Check if this implementation is really needed
  const appTheme = themeState.themeMode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    loadThemeInitialStateValue(themeDispatch);
  }, []);

  const memoizedUserContextValue = React.useMemo(
    () => ({
      themeState,
      themeDispatch,
      appTheme,
    }),
    [themeState, themeDispatch, appTheme],
  );

  return (
    <ThemeContext.Provider value={memoizedUserContextValue}>
      <PaperProvider theme={appTheme}>
        <NavigationContainer theme={navigationTheme}>
          {children}
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'Theme Context Provider must be used within the AppContextProvider',
    );
  }
  return context;
};
