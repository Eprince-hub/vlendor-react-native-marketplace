import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../components/HomeScreen';
import Products from '../components/Products';
import ProfileScreen from '../components/ProfileScreen';
import SingleProduct from '../components/SingleProduct';
import {products} from '../util/data';

const Stack = createNativeStackNavigator();

export default function HomePageScreen(): JSX.Element {
  return (
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
  );
}
