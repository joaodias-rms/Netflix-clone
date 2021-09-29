import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import logoPreview from '../../assets/logo_preview.png';
import {styles} from './styles';

export function Preview() {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        horizontal
        style={styles.flatListContainer}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={{marginLeft: index === 0 ? 20 : 0, marginRight: 10}}>
            <View style={styles.oval}>
              <Image
                style={styles.imgPreview}
                source={{
                  uri: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/09/O-Diabo-de-Cada-Dia-sem-marca-EW.jpg',
                }}
              />
              <Image
                style={styles.logoPreview}
                resizeMode="contain"
                source={logoPreview}
              />
              <LinearGradient
                style={styles.gradient}
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
