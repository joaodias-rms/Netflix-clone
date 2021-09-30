import React from 'react';
import {View, Text} from 'react-native';
import { Login } from '../screens/Login';

import {createStackNavigator} from '@react-navigation/stack';

export function StackRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
        />
    </Stack.Navigator>
  );
}
