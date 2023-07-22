/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './components/HomeScreen';
import Products from './components/Products';
import ProfileScreen from './components/ProfileScreen';
import SingleProduct from './components/SingleProduct';
import {products} from './util/data';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <React.Fragment>
      <NavigationContainer>
        {/* <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
          </ScrollView>
        </SafeAreaView> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome to my first top home'}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{title: 'Welcome to my Profile'}}
          />

          <Stack.Screen name="Products" options={{title: 'Products Page'}}>
            {props => <Products {...props} products={products} />}
          </Stack.Screen>

          <Stack.Screen name="SingleProduct" options={{title: 'Products Page'}}>
            {props => <SingleProduct {...props} products={products} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
export default App;
