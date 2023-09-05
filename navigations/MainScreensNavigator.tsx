/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductDetails} from '../screens/ProductDetails';
import SignUpScreen from '../screens/SignupScreen';
import {useAppContext} from '../util/AppContextProviders';
import BottomNavigationTrigger from './BottomNavigation';

const Stack = createNativeStackNavigator();
export default function MainScreensNavigator() {
  const {themeState} = useAppContext();
  const {themeMode} = themeState;

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
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
            headerShown: false,
            title: 'Services',
          }}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
  },
});
