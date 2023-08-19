import React from 'react';
import {ThemeContextProvider, useThemeContext} from './ThemeContextProvider';
import {UserContextProvider, useUserContext} from './UserContextProvider';

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </ThemeContextProvider>
  );
};

export const useAppContext = () => {
  const themeContext = useThemeContext();
  const userContext = useUserContext();

  return {
    ...themeContext,
    ...userContext,
  };
};

export default AppContextProvider;
