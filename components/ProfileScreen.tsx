import React from 'react';
import {Button, Text, View} from 'react-native';

export default function ProfileScreen({navigation, route}: any) {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Products Page"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}