import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { ILReadquran, ILTadarus, Ornament } from '../../assets';
import { Gap } from '../../components';

const ItemHome = ({navigation}) => {
    return (
        <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
            <View/>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.title}>Quran App</Text>
                <Gap height={20}/>
                <Text style={styles.title2}>Leran Quran and
                Recite once everyday</Text>
            </View>
            <View style={styles.Background}>
                <View />
                <Image source={ILReadquran}/>
                <TouchableOpacity style={styles.wrapText} onPress={() => navigation.replace('MainApp')}>
                    <Text style={styles.title3}>GetStarted</Text>
                </TouchableOpacity>
                
            </View>
            <View/>
        </View>
    )
}

export default ItemHome;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        justifyContent: 'space-between',
        flex:1
    },
    Background:{
        backgroundColor:'#692EBD',
        height:350,
        borderRadius:30,
        alignItems:'center',
        padding:30
    },
    title:{
        fontSize:32,
        fontFamily:'Mulish-ExtraBold',
        color:'#6326BA',
        
    },
    title2:{
        fontSize:20,
        fontFamily:'Mulish-ExtraBold',
        color:'#B4B4B4',
        maxWidth:250,
        textAlign:'center',
    },
    wrapText:{
        alignItems: 'center', 
        backgroundColor:'#FF984D', 
        height:60,
        width:180,
        borderRadius:60/2, 
        justifyContent:'center', 
        position:'absolute',
        bottom:-18
    },
    title3:{
        fontSize:20,
        fontFamily:'Mulish-ExtraBold',
        color:'#FFFFFF',
        maxWidth:250,
        position:'absolute',
    },
})
