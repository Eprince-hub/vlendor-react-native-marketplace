import React from 'react';
import {Switch} from 'react-native-paper';
import {useTheme} from '../providers/ThemeProvider';

const SystemPreferenceSwitch: React.FC = () => {
  const {allowSystemPreference, setAllowSystemPreference, setItem} = useTheme();

  return (
    <Switch
      value={allowSystemPreference}
      onValueChange={() => {
        setAllowSystemPreference(!allowSystemPreference);
        setItem(
          'systemPreferenceSetting',
          JSON.stringify(allowSystemPreference),
        );
      }}
    />
  );
};

export default SystemPreferenceSwitch;
