import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {removeItem} from '../util/asyncStorage';

export default function ResetScreen({navigation}: any) {
  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };
  return (
    <View>
      <Text>We can reset the local storage for now from here</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
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
