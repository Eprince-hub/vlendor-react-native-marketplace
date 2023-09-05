import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

const CustomRadioButton = ({label, checked, onPress}: RadioButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    radioButtonUnchecked: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: checked ? 'blue' : 'gray',
      justifyContent: 'center',
      alignItems: 'center',
    },

    radioButtonChecked: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: 'blue',
    },

    label: {
      marginLeft: 8,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.radioButtonUnchecked}>
          {checked && <View style={styles.radioButtonChecked} />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
