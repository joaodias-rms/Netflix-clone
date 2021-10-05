import React, {useState, useEffect} from 'react';
import {View, Image, Text, Alert, ActivityIndicator} from 'react-native';

import netflixLogo from '../../assets/logo.png';
import {TextInput, Button} from 'react-native-paper';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

const {APIKEY} = process.env

export function Login() {
  const [logged, setLogged] = useState(0);
  const [login, setLogin] = useState({
    username: '',
    password: '',
    request_token: '',
  });
  const navigation = useNavigation();

  const checkLogin = async () => {
    const userLogin = await AsyncStorage.getItem('@username');
    if (userLogin) {
      setLogged(1);
      navigation.navigate('Home');
    } else {
      setLogged(2);
    }
  };

  const handleLogin = async () => {
    try {
      const authData = await api.get(
        `${api.defaults.baseURL}/authentication/token/new?api_key=${APIKEY}`,
      );
      const res = authData.data.request_token;

      setLogin({...login, request_token: res});
      if (res.error) {
        Alert(res.message);
        return false;
      }
    } catch (error) {
      alert(error.message);
    }

    try {
      const loginPost = await api.post(
        `${api.defaults.baseURL}/authentication/token/validate_with_login?api_key=${APIKEY}`,
        {
          ...login,
        },
      );
      const loginRes = loginPost.data;
      if (loginRes) {
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert(error.message);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={netflixLogo} />

      {logged === 0 && <ActivityIndicator size="large" color="#fff" />}

      {logged === 2 && (
        <View>
          <TextInput
            style={styles.loginInput}
            mode="flat"
            label="Mail"
            value={login.mail}
            onChangeText={text => setLogin({...login, username: text})}
          />

          <TextInput
            style={styles.loginInput}
            label="Password"
            secureTextEntry
            value={login.password}
            onChangeText={text => setLogin({...login, password: text})}
          />

          <Button
            color="#e31e20"
            mode="contained"
            style={styles.loginInput}
            onPress={handleLogin}>
            Entrar
          </Button>
          <Button color="#fff" style={styles.loginInput} onPress={() => {}}>
            Recuperar senha
          </Button>
          <Text style={styles.smallText}>
            O acesso é protegido pelo Google reCAPTCHA para garantir que você
            não é um robô. Saiba mais.
          </Text>
        </View>
      )}
    </View>
  );
}
