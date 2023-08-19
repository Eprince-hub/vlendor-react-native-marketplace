import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {UserAction, UserInitialState} from '../type';
import {loadUserInitialStateValue} from './loadUserInitialStateValue';
import {userInitialState} from './userInitialState';
import {userReducer} from './userReducer';

const UserContext = createContext<
  {state: UserInitialState; dispatch: React.Dispatch<UserAction>} | undefined
>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  useEffect(() => {
    loadUserInitialStateValue(dispatch);
  }, []);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('User Context Provider must be used within an AppProvider');
  }
  return context;
};
