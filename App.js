import React from 'react'
import { StatusBar } from 'react-native'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary: "#e31e20",
      background: '#3c3c3c',
      placeholder: '#fff',
      text: '#fff'
    }
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#000'/>
      <Home />
    </PaperProvider>
  )
}
