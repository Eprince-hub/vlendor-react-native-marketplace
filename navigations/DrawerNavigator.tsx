import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ProfileDrawerContent from '../components/ProfileDrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={ProfileDrawerContent}>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen
        // options={{
        //   headerLeft(navigation) {
        //     return (
        //       <TouchableOpacity onPress={() => navigation.goBack()}>
        //         {/* Your custom arrow icon or text */}
        //         <Text>Back</Text>
        //       </TouchableOpacity>
        //     );
        //   },
        // }}
        name="Settings"
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};
