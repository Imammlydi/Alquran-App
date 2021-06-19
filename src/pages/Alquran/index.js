import React from 'react'
import { View,Text,StyleSheet, ScrollView, StatusBar } from 'react-native';
import { MyTopTabs } from '..';
import { Banner, Gap, Pages } from '../../components';



const Alquran = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <Banner title="Alquran" gap gapTop/>
            <Gap height={20}/>
            <ScrollView>
                <Pages 
                    surat="Alfatiah" 
                    arab="ٱلْفَاتِحَةِ" 
                    turun="Meccan -7 verses"
                    num={1}
                    onPress={()=> navigation.navigate('Alfatiah')}
                />
                <Pages 
                    surat="Al-Baqara" 
                    arab="البقرة" 
                    turun="Medinan - 286 verses"
                    num={2}
                    onPress={()=> navigation.navigate('Albaqarah')}
                />
                <Pages 
                    surat="Aal-i-Imraan" 
                    arab=  "آل عمران"
                    turun="Medinan - 200 verses"
                    num={3}
                    onPress={()=> navigation.navigate('Albaqarah')}
                />
                <Pages 
                    surat="Al-Baqara" 
                    arab="البقرة" 
                    turun="Meccan- 286 verses"
                    num={2}
                    onPress={()=> navigation.navigate('Albaqarah')}
                />
               
               
            </ScrollView>
        </View>
    )
}

export default Alquran;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        backgroundColor: '#FFFFFF',
        flex:1
    },
    title:{
        fontSize:20,
        fontFamily:'Mulish-ExtraBold',
        color:'#6326BA',
        textAlign:'center'
        
    },
})
