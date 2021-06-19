import React from 'react';
import { createStackNavigator,TransitionPresets,Dimensions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Alfatiah,
    Splash,
    ItemHome,
    Surat,
    Adzan,
    Dua,
    MyTopTabs,
    Albaqarah,
    TestApi
 } from '../pages';
import Alquran from '../pages/Alquran';
import { BottomNavigator } from '../components';
import { CommonActions } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Tabs = createMaterialTopTabNavigator();

// export function MyTopTabs() {
//     return (
//       <Tabs.Navigator>
//         <Tabs.Screen name="Alfatiah" component={Alfatiah} />
//         <Tabs.Screen name="Dua" component={Dua} />
//       </Tabs.Navigator>
//     );
//   }


const MainApp = () =>{
    offset = 0;
    onScrollHandler = (e) => {
      const currentOffset = e.nativeEvent.contentOffset.y;
      var direction = currentOffset > offset ? "down" : "up";
      offset = currentOffset;
      if (direction === "down") {
        this.props.navigation.dispatch(
          CommonActions.setParams({
            tabBarVisible: false,
          })
        );
      } else {
        this.props.navigation.dispatch(
          CommonActions.setParams({
            tabBarVisible: true,
          })
        );
      }
    };



    //scroll hide bottom tab
    const getTabBarVisible = (route) => {
        const params = route.params;
        if (params) {
          if (params.tabBarVisible === false) {
            return false;
          }
        }
        return true;
      };
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Adzan" component={Adzan}/>
            <Tab.Screen 
                name="Alquran" 
                component={Alquran}
                // options={({ route }) => ({
                //     tabBarVisible: getTabBarVisible(route),
                //   })}
            />
            <Tab.Screen name="Dua" component={Dua}/>
        </Tab.Navigator>
    )
}


const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash" 
                component={Splash} 
                options={{
                    headerShown:false, 
                    
                }}
            />
            <Stack.Screen
                name="MyTopTabs" 
                component={MyTopTabs} 
                options={{
                    headerShown:false, 
                    
                }}
            />
            <Stack.Screen
                name="MainApp" 
                component={MainApp} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="ItemHome" 
                component={ItemHome} 
                options={{
                    headerShown:false, 
                }}
            />
            <Stack.Screen
                name="Surat" 
                component={Surat} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="Alfatiah" 
                component={Alfatiah} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="Albaqarah" 
                component={Albaqarah} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="Alquran" 
                component={Alquran} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="Adzan" 
                component={Adzan} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="TestApi" 
                component={TestApi} 
                options={{
                    headerShown:false, 
                    title: 'Profile',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
        </Stack.Navigator>
    )
}

export default Router;





