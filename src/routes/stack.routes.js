import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../screens/Login';
import {Movies} from '../screens/Movies';

import {TabsRoutes} from './tabs.routes';

export function StackRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={TabsRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
