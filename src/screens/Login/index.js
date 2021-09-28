import React, {useState} from 'react';
import {View, Image} from 'react-native';

import netflixLogo from '../../assets/logo.png';
import {TextInput, Button} from 'react-native-paper';

import {styles} from './styles';

export function Login() {
  const [login, setLogin] = useState({
    mail: '',
    password: '',
  });

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
          onPress={() => {}}>
          Entrar
        </Button>
        <Button
          color="#e31e20"
          style={styles.loginInput}
          onPress={() => {}}>
          Recuperar senha
        </Button>
      </View>
    </View>
  );
}
