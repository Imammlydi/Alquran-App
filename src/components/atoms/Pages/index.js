import React from 'react';
import { View, Text,StyleSheet, TextInput, ImageBackground, TouchableOpacity} from 'react-native'
import { Gap } from '..';
import { Border } from '../../../assets';

const Pages = ({onPress,surat,arab,turun,num}) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <View style={styles.headerAyah}>
                    <View style={styles.circle}>
                        <Border/>
                        <Text style={styles.num}>{num}</Text>
                    </View>
                </View>
                <Gap width={2}/>
                <View style={{flex: 1}}>
                    <Text style={styles.translate}>{surat}</Text>
                    <Text style={styles.translate2}>{turun}</Text>
                </View>
                    <Text style={styles.translate4}>{arab}</Text>

                <Gap height={20}/>
            </View>
            <Gap height={15}/>
            <View style={{borderBottomColor:'#C4C4C4', borderBottomWidth:1, width:'100%'}}/>
            <Gap height={20}/>
        </TouchableOpacity>
    )
}

export default Pages;
 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center'
    },
    headerAyah:{
        height:40,
        borderRadius:5,
        justifyContent:'center',
        paddingHorizontal:15,
    },
    circle:{
        width:44,
        height:44,
        // backgroundColor:'#853BD4',
        borderRadius:27/2,
        justifyContent:'center',
        alignItems: 'center'
    },
    num:{
        fontSize:12,
        fontFamily:'Mulish-Regular',
        color:'#853BD4',
        position:'absolute',
     
    },
    translate:{
        fontSize:17,
        fontFamily:'Mulish-Bold',
        color:'#2C2045',
        maxWidth:250,
    },
    translate2:{
        fontSize:13,
        fontFamily:'Mulish-LightItalic',
        color:'#2C2045',
        maxWidth:300,
    },
    translate4:{
        fontSize:20,
        fontFamily:'ReemKufi-Regular',
        color:'#692EBD',
        maxWidth:300,
        
    },
  
    ayat:{
        fontSize:32,
        fontFamily:'Scheherazade-Regular'
    }
  
})
