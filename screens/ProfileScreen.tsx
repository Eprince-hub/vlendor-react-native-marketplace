import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import DarkModeSwitch from '../components/darkModeComponents/DarkModeSwitch';
import SystemPreferenceSwitch from '../components/darkModeComponents/SystemPreferenceSwitch';
import {useTheme} from '../components/providers/ThemeProvider';
import isUserLoggedIn from '../util/auth/user';

export default function ProfileScreen({route}: any) {
  const navigation = useNavigation<any>();
  // Temporary variable to hold the name of the user
  const profileParams = route.params?.name || 'Guest';
  const {themeMode, theme} = useTheme();

  useEffect(() => {
    const userLoggedIn = isUserLoggedIn('');
    console.log('User is logged in: ', userLoggedIn);

    if (!userLoggedIn) {
      // Navigate to the login screen
      // This is the code to navigate to the login screen
      navigation.navigate('LoginScreen');
    }
  }, [navigation]);

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.onBackground}}>
        This screen will be needed for the users profile and the user related
        settings screen will be displayed here
      </Text>
      <Text style={{color: theme.colors.onBackground}}>
        This is {profileParams}'s profile
      </Text>
      <Text style={{color: theme.colors.onBackground}}>
        My Current Theme mode is {themeMode}
      </Text>
      <DarkModeSwitch />
      <SystemPreferenceSwitch />
    </View>
  );
}
