// TODO: Implement signup authentication in a more secured node.js server and environment

import {setItem} from '../../asyncStorage';

export const signupHandler = async ({...appArguments}) => {
  console.log('signupHandler received: ', appArguments);
  const hasEmptyStringProperty = Object.values(appArguments).some(obj => {
    return Object.values(obj).some(value => value === '');
  });

  if (hasEmptyStringProperty) {
    throw {
      status: 400,
      error: 'Bad Request',
      message: 'All fields are required!',
    };
  }

  try {
    const {basicInfo, location, profileInfo} = appArguments;

    const promises = [
      await setItem(
        'userProfile',
        JSON.stringify({
          name: basicInfo.name,
          userName: profileInfo.userName,
          email: profileInfo.email,
          password: profileInfo.password,
        }),
      ),
      await setItem('userLocation', JSON.stringify(location)),
      await setItem('userProfileInfo', JSON.stringify(profileInfo)),
    ];

    await Promise.all(promises);

    return {
      status: 200,
      message: 'Signup successful',
      SignedUser: {
        name: basicInfo.firstName,
        userName: profileInfo.username,
      },
    };
  } catch (error) {
    throw {
      status: 500,
      error: 'Internal Server Error',
      message: 'Signup failed!',
    };
  }
};
