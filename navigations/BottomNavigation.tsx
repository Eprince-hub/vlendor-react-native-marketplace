import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {renderExploreIcon} from '../components/icons/ExploreIcon';
import {renderHomeIcon} from '../components/icons/HomeIcon';
import {renderProfileIcon} from '../components/icons/ProfileIcon';
import {renderResetIcon} from '../components/icons/ResetIcon';
import {Cart} from '../screens/Cart';
import LoginScreen from '../screens/LoginScreen';
import {ProductsList} from '../screens/ProductsList';
import ResetScreen from '../screens/ResetScreen';
import {useAppContext} from '../util/AppContextProviders';
import isUserLoggedIn from '../util/auth/user';
import {DrawerNavigator} from './DrawerNavigator';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigationTrigger() {
  const {userState} = useAppContext();
  const userLoggedIn = isUserLoggedIn(userState.userProfile?.name);
  return (
    <Tab.Navigator activeColor="blue" initialRouteName="HomeScreen_tab">
      <Tab.Screen
        name="HomeScreen_tab"
        component={ProductsList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: renderExploreIcon,
        }}
      />
      <Tab.Screen
        name="Reset"
        component={ResetScreen}
        options={{
          tabBarLabel: 'Reset',
          tabBarIcon: renderResetIcon,
        }}
      />
      <Tab.Screen
        name="Drawer"
        component={userLoggedIn ? DrawerNavigator : LoginScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigationTrigger;
