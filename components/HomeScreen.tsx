import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {removeItem} from '../util/asyncStorage';

export default function HomeScreen({navigation}: any) {
  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to my Home Page</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />

        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
});
