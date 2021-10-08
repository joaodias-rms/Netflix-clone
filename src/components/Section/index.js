import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {Title} from 'react-native-paper';
import api from '../../services/api';

const {APIKEY} = process.env;

import {styles} from './styles';

export function Section({section, hasBorderTop, title}) {
  const [genres, setGenres] = useState({});

  const getGenre = async () => {
    try {
      const response = await api.get(
        `${api.defaults.baseURL}/genre/movie/list?api_key=${APIKEY}`,
      );
      const res = response.data;

      setGenres(res.genres);
      // console.log(sections);
      if (res.error) {
        Alert(error.message);
        return false;
      }
    } catch (error) {
      Alert(error.message);
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  return (
    <View style={styles.container}>
      {hasBorderTop && <View style={styles.borderTop} />}
      {genres.map(genres => (
        <Title key={genres.id} style={styles.sectionTitle}>
          {genres.name}
        </Title>
      ))}
      <FlatList
        style={styles.list}
        data={section}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground
              style={[
                styles.cover,
                {marginRight: 10, marginLeft: index === 0 ? 20 : 0},
              ]}
              source={{
                uri: `http://image.tmdb.org/t/p/original${item.poster_path}`,
              }}>
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
