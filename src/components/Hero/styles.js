import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   hero:{
       height: 400,
       width: '100%'
   },
   imgLogo:{
       height: 150,
       width: '100%',
       marginTop: 200,
       alignSelf: 'center',
       position: 'absolute',
       zIndex: 10,
   },
   top10Container:{
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: "100%",
    alignItems: 'center'
   },
   top10Logo:{
       height: 40,
       width: 40,
       backgroundColor: '#fff',
       marginRight: 15,
       borderRadius: 40
   },
   top10Text:{
    color: '#fff',
    fontSize: 15
   },
   gradient:{
       width: '100%',
       height: 150,
       position: 'absolute',
       zIndex: 9,
       bottom: 0
   }

})