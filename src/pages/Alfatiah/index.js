import React, { Component } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View,Button } from "react-native";
import { Ayat, Banner, Gap, Header } from "../../components";
import Sound from 'react-native-sound'

export default class Alfatiah extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
    
  }

  
  fetchData = async () => {
    const response = await fetch("https://api.quran.sutanlab.id/surah/1");
    const json = await response.json();
    this.setState({ 
        data: json.data.verses
        
    });
  };

  //'https://cdn.islamic.network/quran/audio/64/ar.alafasy/3.mp3'
  playTrack = ({url}) => {
    const track = new Sound('https://cdn.islamic.network/quran/audio/64/ar.alafasy/3.mp3', null, (e) => {
      track.play()
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Gap height={30}/>
      <Header title="Alfatiah" onPress={()=> this.props.navigation.goBack() }/>
      <ScrollView>
      <Gap height={15}/>
      <Banner 
        surah="Al-Fatiah"
        arti="The Opening"
        turun="MECCAN - 7 VERSES"
        enable
        gap
      />
      <Gap height={35}/>
        <FlatList
          data={this.state.data}
          scrollEnabled={false}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
          
            

            <Ayat
            ayat={`${item.text.arab}`}
            translates={`${item.audio.primary}`}
            translate={`${item.translation.id}`}
            number={`${item.number.inSurah}`}
            onPress={this.playTrack}
            />
        }
        />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'#FFFFFF'
    },
});