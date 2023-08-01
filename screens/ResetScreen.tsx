import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {removeItem} from '../util/asyncStorage';

export default function ResetScreen({navigation}: any) {
  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };
  return (
    <SafeAreaView>
      <View>
        <Text>We can reset the local storage for now from here</Text>
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
