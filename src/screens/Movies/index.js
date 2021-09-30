import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';

import {ButtonVertical} from '../../components/ButtonVertical';
import {Section} from '../../components/Section';
import {Episodes} from '../../components/Episodes';

import {styles} from './styles';

export function Movies() {
  const [type] = useState('serie');
  const [pickerDialogVisible, setPickerDialogVisible] = useState(false);
  const [season, setSeason] = useState({value: 1, label: 'Temporada 1'});

  return (
    <>
      <SinglePickerMaterialDialog
        title="Temporadas"
        items={[
          {value: 1, label: 'Temporada 1'},
          {value: 2, label: 'Temporada 2'},
          {value: 3, label: 'Temporada 3'},
        ]}
        visible={pickerDialogVisible}
        selectedItem={season}
        onOk={result => {
          setPickerDialogVisible(false);
          setSeason(result.selectedItem);
        }}
        onCancel={()=>setPickerDialogVisible(false)}
        ></SinglePickerMaterialDialog>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.hero}
          source={{
            uri: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/09/O-Diabo-de-Cada-Dia-sem-marca-EW.jpg',
          }}
        />
        <View style={styles.movieDataContainer}>
          <Title>O diabo nosso de cada dia</Title>
          <Button
            style={styles.watchButton}
            icon="play"
            color="#fff"
            mode="contained">
            Assistir
          </Button>
          <Paragraph>
            Pregadores Profanos, Autoridades Corruptas, Amantes assassinos. Numa
            cidade cheia de pecadores, um jovem busca justiça.
          </Paragraph>
          <Caption style={styles.captionInfo}>
            Elenco:{' '}
            <Caption style={styles.captionCast}>
              {' '}
              Tom Holland. Robert Pattinson. Haley Bennett. {`\n`}
            </Caption>
            Gênero:{' '}
            <Caption style={styles.captionCast}>
              {' '}
              Ação, Aventura, Dramatico. {`\n`}
            </Caption>
            Cenas e momentos:{' '}
            <Caption style={styles.captionCast}> Violentos.</Caption>
          </Caption>
          <View style={styles.buttonList}>
            <ButtonVertical icon="plus" title="Minha lista" />
            <ButtonVertical icon="thumb-up-outline" title="Classifique" />
            <ButtonVertical icon="send" title="Compartilhe" />
            <ButtonVertical icon="download" title="Baixar" />
          </View>
          {type === 'serie' && (
            <>
              <TouchableOpacity
                onPress={()=>setPickerDialogVisible(true)}
                style={styles.seasonButton}>
                <Text style={styles.seasonName}>{season.label}</Text>
                <Icon name="chevron-down" color="#fff" size={20} />
              </TouchableOpacity>

              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item, index}) => <Episodes key={index} />}
              />
            </>
          )}
        </View>

        {type === 'movie' && (
          <Section hasBorderTop title="Titulos Semelhantes" />
        )}
      </ScrollView>
    </>
  );
}
