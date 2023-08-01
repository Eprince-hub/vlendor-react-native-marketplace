/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CartProvider} from '../components/CartContext';
import AppOnboardingNavigation from '../navigations/AppOnboardingNavigator';

const stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <stack.Navigator initialRouteName="OnboardingScreen">
        <stack.Screen
          name="OnboardingScreen"
          options={{headerShown: false}}
          component={AppOnboardingNavigation}
        />
      </stack.Navigator>
    </CartProvider>
  );
}

export default App;
