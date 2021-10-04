import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home} from '../screens/Home';

export function TabsRoutes() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#fff'}
      shifting={false}
      barStyle={{backgroundColor: '#141414'}}>
      <Tab.Screen
        name="Init"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={26} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={26} name="magnify" />
          ),
        }}
      />
      <Tab.Screen
        name="Coming"
        component={Home}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={26} name="play-speed" />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Home}
        options={{
          tabBarLabel: 'Donwloads',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={26} name="download" />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => <Icon color={color} size={26} name="menu" />,
        }}
      />
    </Tab.Navigator>
  );
}
