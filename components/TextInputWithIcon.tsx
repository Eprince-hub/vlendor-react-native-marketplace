import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, TextInputProps} from 'react-native-paper';

interface TextInputWithIconProps extends TextInputProps {
  icon: string;
  onPress?: () => void;
  mode?: 'flat' | 'outlined';
}

const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  icon,
  onPress,
  mode = 'outlined',
  ...props
}) => {
  return (
    <TextInput
      {...props}
      activeOutlineColor="blue"
      mode={mode}
      right={<TextInput.Icon icon={icon} onPress={onPress} />}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    width: '100%',
  },
});

export default TextInputWithIcon;
