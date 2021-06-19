import React, { Component } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ayat, Banner, Gap, Header } from "../../components";

export default class AliImran extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
    
  }

  
  fetchData = async () => {
    const response = await fetch("https://api.quran.sutanlab.id/surah/3");
    const json = await response.json();
    this.setState({ 
        data: json.data.verses
        
    });
  };

  render() {
    return (
      <View style={styles.container}>
      <Gap height={20}/>
      <ScrollView>
      <Gap height={15}/>
      <Banner 
        surah="Al-Fatiah"
        arti="The Opening"
        turun="MECCAN - 7 VERSES"
        enable
      />
      <Gap height={35}/>
        <FlatList
          data={this.state.data}
          scrollEnabled={false}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
           
            <Ayat
            ayat={`${item.text.arab}`}
            // translates={`${item.text.transliteration.en}`}
            translate={`${item.translation.id}`}
            number={`${item.number.inSurah}`}
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