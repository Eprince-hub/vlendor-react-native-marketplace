import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FixIcon from 'react-native-vector-icons/MaterialIcons';
import {Cart} from '../screens/Cart';
import {ProductsList} from '../screens/ProductsList';
import ProfileScreen from '../screens/ProfileScreen';
import ResetScreen from '../screens/ResetScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigationTrigger() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen_tab">
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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigationTrigger;

// TODO: Move this to a separate component common file
const renderExploreIcon = ({color}: any) => {
  return <FixIcon name="explore" size={26} color={color} />;
};

const renderHomeIcon = () => {
  return <Icon name="home" size={26} />;
};
const renderResetIcon = () => {
  return <Icon name="lock-reset" size={26} />;
};

const renderProfileIcon = () => {
  return <Icon name="account" size={26} />;
};
