import React, {useEffect, useState} from 'react';
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
  const [main, setMain] = useState({});
  const [preview, setPreview] = useState([]);

  const getHome = async () => {
    try {
      const response = await api.get(
        `${api.defaults.baseURL}/discover/movie?api_key=${APIKEY}`,
      );
      const res = response.data;

      if (res.error) {
        Alert(error.message);
        return false;
      }
      setMain(res.results[0]);
      setPreview(res.results);
    } catch (error) {
      Alert(error.message);
    }
  };



  useEffect(() => {
    getHome();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Hero result={main} />
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
        <Preview results={preview} />
      </View>
      {preview.map((section, index) => (
        <Section section={section} key={index} />
      ))}
    </ScrollView>
  );
}
