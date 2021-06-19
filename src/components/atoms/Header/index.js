import React from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Gap } from '..';
import { IconBack } from '../../../assets';

const Header = ({title,onPress}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                <IconBack/>
            </TouchableOpacity>
            <View style={{flex: 1, paddingLeft:20 }}>
                 <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default Header;
 
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems: 'center', 
        padding:10,
    },
    title:{
        fontSize:18,
        fontFamily:'Mulish-ExtraBold',
        color:'#6326BA',
        maxWidth:250,
        
    },
})