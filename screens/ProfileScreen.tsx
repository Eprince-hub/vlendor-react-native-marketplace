import React from 'react';
import {Text, View} from 'react-native';

export default function ProfileScreen({route}: any) {
  // Temporary variable to hold the name of the user
  const profileParams = route.params?.name || 'Guest';
  return (
    <View>
      <Text>
        This screen will be needed for the users profile and the user related
        settings screen will be displayed here
      </Text>
      <Text>This is {profileParams}'s profile</Text>
    </View>
  );
}
