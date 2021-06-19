import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View,Text} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import { Compasss } from '../../assets';
import { Gap } from '../../components';

 
const App = () => {
  const [compassHeading, setCompassHeading] = useState(0);
 
  useEffect(() => {
    const degree_update_rate = 3;
 
    CompassHeading.start(degree_update_rate, degree => {
      setCompassHeading(degree);
    });
 
    return () => {
      CompassHeading.stop();
    };
  }, []);
 
  return (
      <View style={{flex: 1, backgroundColor:"#FFFFFF"}}>
      <Gap height={50}/>
      <Text style={styles.title}>Qiblat</Text>
        <Image
            style={[
            styles.image,
            {transform: [{rotate: `${360 - compassHeading}deg`}]},
            ]}
            resizeMode="contain"
            source={Compasss}
        />
      </View>
  );
};
 
const styles = StyleSheet.create({
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
  title:{
    fontSize:27,
    fontFamily:'Mulish-Bold',
    color:'#4A1795',
    textAlign:'center'
},
});
 
export default App;