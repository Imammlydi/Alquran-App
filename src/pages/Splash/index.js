import React,{useEffect} from 'react'
import { ImageBackground, View,StyleSheet,Text,StatusBar} from 'react-native';
import { Splash2, Splash3, SplashScreen } from '../../assets';


const Splash = ({navigation}) => {
   useEffect(() => {
      setTimeout(() =>{
        navigation.replace('ItemHome')
      },3000)
   }, [])


    return (
        <>
            <View  style={styles.page} >
                <StatusBar translucent backgroundColor='transparent' />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Splash3/>
                </View>
            </View>

        </>
    )
}

export default Splash;

const styles = StyleSheet.create({
    page :{
        flex : 1,
        justifyContent:'center',
        alignItems : 'center',
        backgroundColor:'#FFFFFF'

    },
    title:{
        fontSize:25,
        fontFamily:'Mulish-ExtraBold',
        color:'#FFFFFF',
        position:'absolute',
    }
})
