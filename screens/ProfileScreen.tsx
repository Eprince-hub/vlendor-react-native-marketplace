import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import ThemeSwitcher from '../components/ThemeSwitcher';
import {useAppContext} from '../util/AppContextProviders';
import isUserLoggedIn from '../util/auth/user';

export default function ProfileScreen({route}: any) {
  const navigation = useNavigation<any>();
  // Temporary variable to hold the name of the user
  const profileParams = route.params?.name || 'Guest';

  const {userState, themeState} = useAppContext();

  console.log('ProfileScreen User Stats: ', userState.userProfile);

  useEffect(() => {
    const userLoggedIn = isUserLoggedIn(userState.userProfile?.name);
    console.log('User is logged in: ', userLoggedIn);

    if (!userLoggedIn) {
      // Navigate to the login screen
      // This is the code to navigate to the login screen
      navigation.navigate('LoginScreen');
    }
  }, [navigation, userState.userProfile?.name]);

  return (
    <View>
      <Text>
        This screen will be needed for the users profile and the user related
        settings screen will be displayed here
      </Text>
      <Text>This is {profileParams}'s profile</Text>
      <Text>My Current Theme mode is {themeState.themeMode}</Text>
      <ThemeSwitcher />
    </View>
  );
}
