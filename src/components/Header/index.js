import React from 'react';
import {Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import compactLogo from '../../assets/logo_compact.png';

import {styles} from './styles';

export function Header() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}>
      <SafeAreaView style={styles.headerSafeAreaView}>
        <Image style={styles.logoHeader} source={compactLogo} />
        <TouchableOpacity>
          <Text style={styles.text}>Séries</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Minha lista</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
