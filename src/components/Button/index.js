import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './styles';

export function ButtonHeader(props) {
  return (
    <View>
      <TouchableOpacity style={styles.buttonHeader}>
        <Icon name={props.icon} color="#FFF" size={20} />
        <Text style={styles.headerText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
