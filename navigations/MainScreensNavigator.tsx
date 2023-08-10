/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useTheme} from '../components/providers/ThemeProvider';
import {ProductDetails} from '../screens/ProductDetails';
import BottomNavigationTrigger from './BottomNavigation';

const Stack = createNativeStackNavigator();
export default function MainScreensNavigator() {
  const {theme, themeMode} = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
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
      </Stack.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
