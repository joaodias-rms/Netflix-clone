import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import top10 from '../../assets/top10.png';

import {styles} from './styles';

export function Hero({result}) {
  return (
    <ImageBackground
      style={styles.hero}
      source={{
        uri: `http://image.tmdb.org/t/p/original${result.backdrop_path}`,
      }}>
      {/* <Image
        style={styles.imgLogo}
        resizeMode="contain"
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/800px-Breaking_Bad_logo.svg.png',
        }}
      /> */}

      <View style={styles.top10Container}>
        <Image style={styles.top10Logo} source={top10} />
        <Text style={styles.top10Text}>Top 1 hoje no Brasil</Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
      />
    </ImageBackground>
  );
}
