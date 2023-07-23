// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import HomePageScreen from '../screens/HomePageScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import {getItem} from '../util/asyncStorage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');
    if (onboarded === '1') {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };

  if (showOnboarding === null) {
    return null;
  }

  return showOnboarding ? (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="DefaultHomePage"
        options={{headerShown: false}}
        component={HomePageScreen}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="DefaultHomePage">
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="DefaultHomePage"
        options={{headerShown: false}}
        component={HomePageScreen}
      />
    </Stack.Navigator>
  );
}
