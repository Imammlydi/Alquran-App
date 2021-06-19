import React from 'react';
import { View, Text,StyleSheet, TextInput, Image} from 'react-native'
import { Bismillah, ILMosque, Mosque, Ornament } from '../../../assets';
import { Gap } from '../../atoms';



const Banner = ({surah,arti,turun,enable,height,title,gap,gapTop}) => {
    return (
            <View style={styles.container(height)}>
                {  gapTop && <Gap height={45}/> }
                
                <Image source={Mosque} style={styles.mosque}/>
                {enable && 
                    <Ornament style={{position:'absolute',right:-5,top:15}}/>
                }
                <Text style={styles.titles}>{surah}</Text>
                <Text style={styles.desc}>{arti}</Text>
                {gap && <Gap height={20}/>}
                <Text style={styles.titles2}>{title}</Text>
                {
                    enable && <View style={{borderBottomColor:'#FFFFFF', borderBottomWidth:0.2, width:200}}/>
                }
                {gap && <Gap height={15}/>}
                <Text style={styles.desc}>{turun}</Text>
                {enable && <Gap height={20}/> }
                
                {enable &&  <Bismillah/>}
             </View>
    )
}

export default Banner;
 
const styles = StyleSheet.create({
    container:(height)=>({
        height:height, 
        backgroundColor:'#9627A8', 
        borderRadius:30, 
        alignItems: 'center', 
        paddingVertical:15
    }),
    titles:{
        fontSize:20,
        fontFamily:'Mulish-Regular',
        color:'#FFFFFF',
        maxWidth:250,
        textAlign: 'center'
    },
    titles2:{
        fontSize:20,
        fontFamily:'Mulish-Bold',
        color:'#FFFFFF',
        maxWidth:250,
        textAlign: 'center'
    },
    desc:{
        fontSize:15,
        fontFamily:'Mulish-Regular',
        color:'#FFFFFF',
        maxWidth:250,
        textAlign: 'center'
    },
    mosque:{
        width:"100%",
        position:'absolute',
        bottom:0,
    }
})