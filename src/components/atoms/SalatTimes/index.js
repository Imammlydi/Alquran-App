import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Gap } from '..';
import { IconnotifOff } from '../../../assets';

const SalatTimes = ({times,title}) => {


    return (
        <View >
            <View style={styles.container}>
                <TouchableOpacity>
                    <IconnotifOff/>
                </TouchableOpacity>
                <Gap width={20} />
                <View style={{flex: 1}}>
                 <Text style={styles.translate}>{title}</Text>
                </View>
                <Text style={styles.translate3}>{times}</Text>
                <Gap />
                </View>
                <View style={{borderBottomColor:'#9627A8', borderBottomWidth:0.3, width:'100%'}}/>
                <Gap height={20} />
        </View>
    )
}

export default SalatTimes;
 
const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        flexDirection:'row',
        alignItems: 'center'
    },
    translate:{
        fontSize:18,
        fontFamily:'Mulish-Regular',
        color:'#9627A8',
        maxWidth:250,
    },
    translate3:{
        fontSize:17,
        fontFamily:'Mulish-Regular',
        color:'#692EBD',
        maxWidth:300,
    },
    ayat:{
        fontSize:36,
        fontFamily:'Scheherazade-Regular'
    }
  
})
