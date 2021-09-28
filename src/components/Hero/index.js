import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

export function Hero() {
  return (
    <ImageBackground
      style={styles.hero}
      source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}></ImageBackground>
  );
}
