import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import {styles} from './styles';

export function Episodes() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/09/O-Diabo-de-Cada-Dia-sem-marca-EW.jpg   ',
          }}
        />
        <View>
          <Title style={styles.title}>1. Episódio Piloto</Title>
          <Caption>45 mn</Caption>
        </View>
      </View>
      <Caption>Lorem ipsum Dollor Sit Amet</Caption>
    </TouchableOpacity>
  );
}
