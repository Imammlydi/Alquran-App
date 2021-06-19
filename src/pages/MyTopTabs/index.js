import * as React from 'react';
import { View, useWindowDimensions,Text, ScrollView,StyleSheet } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { Albaqarah, Alfatiah, AliImran, Dua } from '..';
import { Banner } from '../../components';




const indicate = () =>
    (<View style={{borderBottomColor:'#FA4A0C'}}/>)


const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={{ 
          backgroundColor: '#9627A8',
          alignSelf:'center', 
          height:2
        }}
      style={{ 
          backgroundColor: '#FFFFFF',
          color: 'blue',
         }}
          
        //   renderIndicator={({ route, focused, color }) => (
        //     indicate
        //   )}
          renderLabel={({ route, focused, color }) => (
            <Text style={styles.titles}>
              {route.title}
            </Text>
          )}
    />
  );


export default function HomeContent({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([

    { key: 'first', title: 'Alfatiah' },
    { key: 'second', title: 'Albaqarah' },
    { key: 'third', title: 'AliImran' },
    // { key:'fourth', title: 'Users'},
  ]);

  const renderScene = SceneMap({
    first: Alfatiah,
    second: Albaqarah,
    third:AliImran
  });

  return (
      <>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={{paddingHorizontal:0}}
   
      
    />
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    titles:{
        fontSize:18,
        fontFamily:'Mulish-ExtraBold',
        color:'#6326BA',
        // textAlign:'center',
        margin: 8 
        
    },
})