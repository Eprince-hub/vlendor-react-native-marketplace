import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {UserAction, UserInitialState} from '../type';
import {loadUserInitialStateValue} from './loadUserInitialStateValue';
import {userInitialState} from './userInitialState';
import {userReducer} from './userReducer';

const UserContext = createContext<
  | {userState: UserInitialState; userDispatch: React.Dispatch<UserAction>}
  | undefined
>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  useEffect(() => {
    loadUserInitialStateValue(userDispatch);
  }, []);

  const memoizedUserContextValue = React.useMemo(
    () => ({
      userState,
      userDispatch,
    }),
    [userState, userDispatch],
  );

  return (
    <UserContext.Provider value={memoizedUserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      'User Context Provider must be used within the AppContextProvider',
    );
  }
  return context;
};
