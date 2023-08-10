/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {ThemeProvider} from './components/providers/ThemeProvider';
import App from './src/App';

const AppComponent = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppComponent);
