// TODO: Implement Login authentication in a more secured node.js server and environment

import {getItem} from '../../asyncStorage';

export const loginHandler = async ({...appArguments}) => {
  const loggedInUser = await getItem('userProfile');

  if (appArguments.emailOrPhone === '' || appArguments.password === '') {
    throw {
      status: 400,
      error: 'Bad Request',
      message: 'All fields are required!',
    };
  }

  if (!loggedInUser) {
    throw {
      status: 401,
      error: 'Unauthorized',
      message: 'User not found!',
    };
  }

  const {emailOrPhone, password} = appArguments;
  const {name, userName, password: storedPassword} = JSON.parse(loggedInUser);

  if (emailOrPhone !== userName || password !== storedPassword) {
    throw {
      status: 401,
      error: 'Unauthorized',
      message: 'Invalid credentials!',
    };
  }

  return {
    status: 200,
    message: 'Login successful',
    SignedUser: {
      name,
      userName,
    },
  };
};
