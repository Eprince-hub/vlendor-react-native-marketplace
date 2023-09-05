import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface PhoneInputProps {
  label: string;
  countryCode: string;
  icon: string;
  phoneNumber: string;
  mode?: 'flat' | 'outlined';
  onChangePhoneNumber: (phoneNumber: string) => void;
  disabled?: boolean;
}

const PhoneNumberInput: React.FC<PhoneInputProps> = ({
  label,
  countryCode,
  icon,
  phoneNumber,
  mode = 'outlined',
  onChangePhoneNumber,
  disabled,
}) => {
  const [remainingPhoneNumber, setRemainingPhoneNumber] =
    React.useState(phoneNumber);

  const handlePhoneNumberChange = (text: string) => {
    // Remove non-numeric characters from input
    const cleanedPhoneNumber = text.replace(/\D/g, '');
    setRemainingPhoneNumber(cleanedPhoneNumber);
    onChangePhoneNumber(cleanedPhoneNumber);
  };

  return (
    <View style={styles.phoneInputContainer}>
      <TextInput style={styles.countryCodeText} disabled mode={mode}>
        {countryCode}
      </TextInput>
      <TextInput
        activeOutlineColor="blue"
        mode={mode}
        disabled={disabled}
        label={label}
        value={remainingPhoneNumber}
        keyboardType="numeric"
        onChangeText={handlePhoneNumberChange}
        right={<TextInput.Icon icon={icon} />}
        style={styles.phoneNumberInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  countryCodeText: {
    marginRight: 0,
  },
  phoneNumberInput: {
    flex: 1,
  },
});

export default PhoneNumberInput;
