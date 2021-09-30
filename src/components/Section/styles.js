import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   container:{
      width: '100%'
   },
   borderTop:{
      backgroundColor: '#e50914',
      height: 3,
      width: 100,
      left: 20,
      marginBottom: 10
   },
   sectionTitle:{
      marginLeft: 20
   },
   list:{
      width: '100%',
      height: 180,
      marginTop: 10,
      marginBottom: 30
   },
   cover:{
      width: 120,
      overflow: 'hidden',
      height: 180,
      borderRadius: 4
   },
   coverLogo:{
      width: 100,
      height: 45,
      position: 'absolute',
      zIndex: 10,
      bottom: 20,
      alignSelf: 'center'
   }
})