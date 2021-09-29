import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  
    flatListContainer: {
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom: 50
    },
    oval: {
        backgroundColor: '#e31e20',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius: 90
    },
    imgPreview:{
        height: 85,
        width: 85,
        borderRadius: 85
    },
    logoPreview:{
         width: 150,
         height: 33,
         position: 'absolute',
         zIndex: 10,
         bottom: 0,
         alignSelf: 'center'
    },
    gradient:{
        width: '100%',
        position: 'absolute',
        zIndex: 9,
        bottom: 0,
        height: 40
    }
})