/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppOnboardingNavigation from '../navigations/AppOnboardingNavigator';

const stack = createNativeStackNavigator();

function App() {
  return (
    <stack.Navigator initialRouteName="OnboardingScreen">
      <stack.Screen
        name="OnboardingScreen"
        options={{headerShown: false}}
        component={AppOnboardingNavigation}
      />
    </stack.Navigator>
  );
}

export default App;
