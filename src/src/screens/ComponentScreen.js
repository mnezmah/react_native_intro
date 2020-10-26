import React from 'react'
import { View } from 'react-native'
import {Text, StyleSheet} from 'react-native'

const ComponentScreen = ()=> {
//const greeting  = "Hi there!"
const greeting  = {color: 'red',
                    name:'Mario'}

  return (
  <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.subheaderStyle}>My name is {greeting.name}</Text>
  </View>
  )
  }

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }, 
  subheaderStyle: {
    fontSize: 20
  }
})

export default ComponentScreen