import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DarkModeSwitch from '../components/darkModeComponents/DarkModeSwitch';
import SystemPreferenceSwitch from '../components/darkModeComponents/SystemPreferenceSwitch';
import {useTheme} from '../components/providers/ThemeProvider';

export default function ProfileScreen({route}: any) {
  // Temporary variable to hold the name of the user
  const profileParams = route.params?.name || 'Guest';
  const {themeMode} = useTheme();
  return (
    <View
      style={
        themeMode === 'light' ? styles.container_light : styles.container_dark
      }>
      <Text
        style={themeMode === 'light' ? styles.text_light : styles.text_dark}>
        This screen will be needed for the users profile and the user related
        settings screen will be displayed here
      </Text>
      <Text
        style={themeMode === 'light' ? styles.text_light : styles.text_dark}>
        This is {profileParams}'s profile
      </Text>
      <Text
        style={themeMode === 'light' ? styles.text_light : styles.text_dark}>
        My Current Theme mode is {themeMode}
      </Text>
      <DarkModeSwitch />
      <SystemPreferenceSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container_light: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  container_dark: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  text_light: {
    color: '#000',
  },

  text_dark: {
    color: '#fff',
  },
});
