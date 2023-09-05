import {NavigationContainer} from '@react-navigation/native';
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {name as appName} from './app.json';
import App from './src/App';

const AppComponent = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppComponent);
