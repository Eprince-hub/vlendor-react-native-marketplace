import React from 'react';
import {Switch} from 'react-native-paper';
import {useTheme} from '../providers/ThemeProvider';

const DarkModeSwitch: React.FC = () => {
  const {themeMode, toggleTheme} = useTheme();

  return <Switch value={themeMode === 'dark'} onValueChange={toggleTheme} />;
};

export default DarkModeSwitch;
