import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import {getItem} from '../util/asyncStorage';
import MainScreensNavigator from './MainScreensNavigator';

const Stack = createNativeStackNavigator();

export default function AppOnboardingNavigation() {
  const [showOnboardingScreen, setShowOnboardingScreen] = useState<
    boolean | null
  >(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');
    if (onboarded === '1') {
      // hide onboarding
      setShowOnboardingScreen(false);
    } else {
      // show onboarding
      setShowOnboardingScreen(true);
    }
  };

  if (showOnboardingScreen === null) {
    return null;
  }

  console.log('showOnboardingScreen', showOnboardingScreen);

  return showOnboardingScreen ? (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="MainScreens"
        options={{headerShown: false}}
        component={MainScreensNavigator}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="MainScreens">
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="MainScreens"
        options={{headerShown: false}}
        component={MainScreensNavigator}
      />
    </Stack.Navigator>
  );
}
