import React from 'react';
import {Button, Text, View} from 'react-native';

export default function HomeScreen({navigation}: any) {
  return (
    <View>
      <Text>Welcome to my Home Page</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
}

// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
