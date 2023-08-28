import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Text} from 'react-native-paper';
import {useAppContext} from '../util/AppContextProviders';

type CustomDropdownProps = {
  options: {label: string; value: string}[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
};

export default function CustomDropdown({
  options,
  selectedValue,
  setSelectedValue,
  placeholder,
  disabled,
}: CustomDropdownProps) {
  const [isFocus, setIsFocus] = useState(false);

  const {appTheme} = useAppContext();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: appTheme.colors.background,
      paddingVertical: 16,
      marginBottom: -8,
    },
    dropdown: {
      height: 54,
      borderColor: appTheme.colors.outline,
      borderWidth: isFocus ? 2 : 1,
      borderRadius: 6,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: appTheme.colors.background,
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
    },
    placeholderStyle: {
      color: appTheme.colors.onBackground,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: appTheme.colors.onBackground,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color: 'blue',
    },
    itemTextStyle: {
      fontSize: 16,
      color: 'blue',
    },
    focusBlue: {
      color: 'blue',
    },
    focusBorderBlue: {
      borderColor: 'blue',
    },
  });

  const renderLabel = () => {
    if (selectedValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && styles.focusBlue]}>
          {placeholder}
        </Text>
      );
    }
    return null;
  };

  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && styles.focusBorderBlue]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        data={options}
        search
        maxHeight={windowHeight}
        labelField="label"
        valueField="value"
        placeholder={isFocus ? '' : placeholder}
        searchPlaceholder="Search..."
        value={selectedValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelectedValue(item.value);
          setIsFocus(false);
        }}
        disable={disabled}
      />
    </View>
  );
}
