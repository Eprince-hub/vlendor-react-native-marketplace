import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, List, TextInput} from 'react-native-paper';

interface DropdownProps<DropDownParams> {
  label: string;
  options: DropDownParams[];
  selectedValue: DropDownParams | null;
  onSelect: (value: DropDownParams) => void;
  disabled?: boolean;
}

export default function Dropdown<DropDownParams>({
  label,
  options,
  selectedValue,
  onSelect,
  disabled,
}: DropdownProps<DropDownParams>) {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (value: DropDownParams) => {
    onSelect(value);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        disabled={disabled}
        label={label}
        value={selectedValue ? selectedValue.toString() : ''}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
        right={
          <TextInput.Icon
            disabled={disabled}
            icon={showOptions ? 'chevron-up' : 'chevron-down'}
            onPress={() => setShowOptions(!showOptions)}
          />
        }
      />

      {showOptions && (
        <View style={styles.optionsContainer}>
          <List.Section>
            {options.map((option, index) => (
              <React.Fragment key={index}>
                <List.Item
                  title={option!.toString()}
                  onPress={() => handleSelect(option)}
                />
                <Divider />
              </React.Fragment>
            ))}
          </List.Section>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  optionsContainer: {
    marginTop: 5,
    elevation: 4,
    borderRadius: 4,
  },
});
