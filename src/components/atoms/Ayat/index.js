import React from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Gap } from '..';
import { IcPlay } from '../../../assets';

const Ayat = ({ayat,translate,translates,number,a7rtinya,onPress}) => {
    return (
        <View style={{marginBottom:27}}>
            <View style={styles.headerAyah}>
                <View style={styles.circle}>
                    <Text style={styles.num}>{number}</Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                    <IcPlay/>
                </TouchableOpacity>
            </View>
            <Gap height={20}/>
            <Text style={styles.ayat}>{ayat}</Text>
            <Gap/>
            <Text style={styles.translate2}>{translates}</Text>
            <Gap height={10}/>
            <Text style={styles.translate}>{a7rtinya}</Text>
            <Text style={styles.translate3}>{translate}</Text>
            <Gap height={10}/>
            <View style={{borderBottomColor:'#C4C4C4', borderBottomWidth:0.5, width:'100%'}}/>
        </View>
    )
}

export default Ayat;
 
const styles = StyleSheet.create({
    headerAyah:{
        height:40,
        backgroundColor:'#F8F5FC',
        borderRadius:5,
        alignItems:'center',
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    circle:{
        width:27,
        height:27,
        backgroundColor:'#853BD4',
        borderRadius:27/2,
        justifyContent:'center',
        alignItems: 'center'
    },
    num:{
        fontSize:12,
        fontFamily:'Mulish-Regular',
        color:'#FFFFFF',
     
    },
    translate:{
        fontSize:17,
        fontFamily:'Mulish-Bold',
        color:'#2C2045',
        maxWidth:250,
    },
    translate2:{
        fontSize:17,
        fontFamily:'Mulish-LightItalic',
        color:'#2C2045',
        maxWidth:300,
    },
    translate3:{
        fontSize:17,
        fontFamily:'Mulish-LightItalic',
        color:'#2C2045',
        maxWidth:300,
    },
    ayat:{
        fontSize:36,
        fontFamily:'Scheherazade-Regular'
    }
  
})
