import React from 'react'
import { View, Text,StyleSheet, TextInput} from 'react-native'


const Gap = ({height,width}) => {
  return (
      <View style={styles.Gap(height,width)}/>
       
      
  )
}

export default Gap;
const styles = StyleSheet.create({
    Gap: (height,width) => ({
        height:height, 
        width:width
      })
}) 
