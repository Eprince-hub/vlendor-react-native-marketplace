/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ProductDetails} from '../screens/ProductDetails';
import BottomNavigationTrigger from './BottomNavigation';

const Stack = createNativeStackNavigator();
export default function MainScreensNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={BottomNavigationTrigger}
        options={{
          title: 'Services',
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
