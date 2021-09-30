import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  hero: {
    height: 200,
    width: '100%',
  },
  movieDataContainer: {
    padding: 20,
  },
  watchButton: {
    marginVertical: 20,
  },
  captionInfo: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionCast: {
    color: '#fff',
  },
  buttonList: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seasonButton: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.21)',
    borderRadius: 3,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  seasonName: {
      color: '#fff'
  },
});
