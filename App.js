import React from 'react'
import { StatusBar } from 'react-native'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { Routes } from './src/routes';

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
      <Routes />
    </PaperProvider>
  )
}
