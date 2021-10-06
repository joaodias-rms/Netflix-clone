import React from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import logoPreview from '../../assets/logo_preview.png';
import {styles} from './styles';


export function Preview({results}) {
  return (
    <View>
      <FlatList
        data={results}
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
                  uri: `http://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
              />
              {/* <Image
                style={styles.logoPreview}
                resizeMode="contain"
                source={logoPreview}
              /> */}
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
