/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {ProductDetails} from '../screens/ProductDetails';
import SignUpScreen from '../screens/SignupScreen';
import {useAppContext} from '../util/AppContextProviders';
import BottomNavigationTrigger from './BottomNavigation';

const Stack = createNativeStackNavigator();
export default function MainScreensNavigator() {
  const {themeState} = useAppContext();
  const {themeMode} = themeState;

  return (
    <>
      <StatusBar
        barStyle={themeMode === 'light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: styles.headerTitle,
        }}>
        <Stack.Screen
          name="Products"
          component={BottomNavigationTrigger}
          options={{
            title: 'Services',
          }}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
