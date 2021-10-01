import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';

import netflixLogo from '../../assets/logo.png';
import {TextInput, Button} from 'react-native-paper';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export function Login() {
  const [login, setLogin] = useState({
    mail: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={netflixLogo} />
      <View>
        <TextInput
          style={styles.loginInput}
          mode="flat"
          label="Mail"
          value={login.mail}
          onChangeText={text => setLogin({...login, email: text})}
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
          O acesso é protegido pelo Google reCAPTCHA para garantir que você não
          é um robô. Saiba mais.
        </Text>
      </View>
    </View>
  );
}
