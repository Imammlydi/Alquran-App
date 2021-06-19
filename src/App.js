import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';




const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App;