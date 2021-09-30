import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Title} from 'react-native-paper';

import {styles} from './styles';

export function Section({hasBorderTop}) {
  return (
    <View style={styles.container}>
      {hasBorderTop && <View style={styles.borderTop} />}
      <Title style={styles.sectionTitle}>Section Name</Title>
      <FlatList
        style={styles.list}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground
              style={[
                styles.cover,
                {marginRight: 10, marginLeft: index === 0 ? 20 : 0},
              ]}
              source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}>
              <Image
                resizeMode="contain"
                style={styles.coverLogo}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/800px-Breaking_Bad_logo.svg.png',
                }}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
}
