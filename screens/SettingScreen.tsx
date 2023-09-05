import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import ThemeSwitcher from '../components/ThemeSwitcher';
import {useAppContext} from '../util/AppContextProviders';
import {setUserProfile} from '../util/AppContextProviders/UserContextProvider/userActions';
import {getItem} from '../util/asyncStorage';

export default function SettingScreen() {
  const {userDispatch} = useAppContext();

  const handleSignOut = async () => {
    const userInfoFromStorage = await getItem('userProfile');
    console.log('User Info from storage Now: ', userInfoFromStorage);

    userDispatch(setUserProfile(null));
  };

  return (
    <View>
      <Text>Appearance</Text>
      <ThemeSwitcher />

      <View>
        <Text>You can Logout by clicking below</Text>
        <Button onPress={handleSignOut}>Logout</Button>
      </View>
    </View>
  );
}
