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

      // console.log(res);
      if (res.error) {
        alert(error.message);
        return false;
      }
      setMain(res.results[0]);
      setPreview(res.results);

    } catch (error) {
      alert(error.message);
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
      {[1, 2, 3, 4].map((section, index) => (
        <Section key={index} title="Novidades" />
      ))}
    </ScrollView>
  );
}
