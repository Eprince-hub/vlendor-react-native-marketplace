import {NavigationContainer} from '@react-navigation/native';
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {name as appName} from './app.json';
import {ThemeProvider} from './components/providers/ThemeProvider';
import App from './src/App';

const AppComponent = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppComponent);
