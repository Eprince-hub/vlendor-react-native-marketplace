import React from 'react';
import {ThemeContextProvider, useThemeContext} from './ThemeContextProvider';
import {UserContextProvider, useUserContext} from './UserContextProvider';

type CombinedContext = ReturnType<typeof useThemeContext> &
  ReturnType<typeof useUserContext>;

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

  if (themeContext) {
    return themeContext as CombinedContext;
  }

  return userContext as CombinedContext;
};

export default AppContextProvider;
