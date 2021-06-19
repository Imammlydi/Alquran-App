import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class FaltList extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://api.quran.sutanlab.id/surah/2");
    const json = await response.json();
    this.setState({ data: json.data.verses});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              {`${item.text.arab} ${item.text.transliteration.en}`}
            </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    backgroundColor:'yellow'
  }
});