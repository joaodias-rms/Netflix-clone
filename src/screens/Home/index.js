import React, {useEffect} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {Button, Title} from 'react-native-paper';

import {ButtonVertical} from '../../components/ButtonVertical';
import {Header} from '../../components/Header';
import {Hero} from '../../components/Hero';
import {Preview} from '../../components/Preview';
import {Section} from '../../components/Section';

import api from '../../services/api';

const {APIKEY} = process.env;

import {styles} from './styles';

export function Home() {
  const getMovie = async () => {
    try {
      const movies = await api.get(
        `${api.defaults.baseURL}/discover/movie?api_key=${APIKEY}`,
      );
      const res = movies.data.results


      if(res.error){
        Alert(error.message)
      }
    } catch (error) {
      Alert(error.message);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Hero />
      <Header />

      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" title="Minha lista" />
        <Button icon="play" color="#fff" mode="contained">
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" title="Saiba mais" />
      </View>

      <View style={styles.containerPreview}>
        <Title style={styles.titlePreview}>Prévias</Title>
        <Preview />
      </View>
      {[1, 2, 3, 4].map((section, index) => (
        <Section key={index} title="Novidades" />
      ))}
    </ScrollView>
  );
}
