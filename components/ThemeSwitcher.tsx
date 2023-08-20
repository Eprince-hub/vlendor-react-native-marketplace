import React, {useEffect} from 'react';
import {Appearance, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useAppContext} from '../util/AppContextProviders';
import {
  setSystemPreference,
  setThemeMode,
} from '../util/AppContextProviders/ThemeContextProvider/themeActions';
import {ThemeMode, UseSystemPreference} from '../util/AppContextProviders/type';
import {getItem, removeItem, setItem} from '../util/asyncStorage';
import CustomRadioButton from './CustomRadioButton';

const ThemeSwitcher = () => {
  const {state, dispatch} = useAppContext();
  const {themeMode, useSystemPreference} = state;

  const handleModeChange = async (newMode: ThemeMode | UseSystemPreference) => {
    if (newMode === 'system') {
      const systemTheme = Appearance.getColorScheme();
      systemTheme && (await setItem('themeMode', systemTheme));
      await setItem('systemPreference', newMode);
      dispatch(setSystemPreference(newMode));
      dispatch(setThemeMode(systemTheme!));
      return;
    }
    newMode && (await setItem('themeMode', newMode));
    await removeItem('systemPreference');
    dispatch(setThemeMode(newMode!));
    dispatch(setSystemPreference(null));
  };

  //TODO: This useEffect and its implementation might be unnecessary
  useEffect(() => {
    // Get saved system preference from AsyncStorage
    getItem('systemPreference').then(savedPreference => {
      if (savedPreference === 'system') {
        dispatch(setSystemPreference('system'));
      }
    });
  }, [dispatch]);

  function radioButtonStatusChecked(mode: string) {
    if (themeMode === mode && useSystemPreference === null) {
      return true;
    } else if (themeMode === mode && useSystemPreference === 'system') {
      return false;
    }

    return false;
  }

  return (
    <View>
      <Text>Change your mode preference</Text>
      <CustomRadioButton
        label="Dark"
        checked={radioButtonStatusChecked('dark')}
        onPress={() => handleModeChange('dark')}
      />
      <CustomRadioButton
        label="Light"
        checked={radioButtonStatusChecked('light')}
        onPress={() => handleModeChange('light')}
      />
      <CustomRadioButton
        label="System"
        checked={useSystemPreference === 'system'}
        onPress={async () => await handleModeChange('system')}
      />
    </View>
  );
};

export default ThemeSwitcher;
