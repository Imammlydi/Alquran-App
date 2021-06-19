import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import { 
    IconAdzanOff,
    IconAdzanOn,
    IconDuaOff,
    IconDuaOn,
    IconQuranOff,
    IconQuranOn, 
} from '../../../assets';



const TabItem = ({title,active, onPress, onLongPress}) => {
    const Icon = () =>{

            if(title === 'Adzan'){
                return active ? <IconAdzanOn/> : <IconAdzanOff/>
            }
            if(title === 'Alquran'){
                return active ? <IconQuranOn/>: <IconQuranOff/>
            }
            if(title === 'Dua'){
                return active ? <IconDuaOn/>: <IconDuaOff/>
            }

            return <IconAdzanOn/>
       
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default TabItem;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    text:(active) =>({
        fontSize:10,
        // color: active ? colors.text.menuActive : colors.text.menuInactive,
        // fontFamily: fonts.primary[600],
        marginTop:4,
    })
})
