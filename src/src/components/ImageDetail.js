import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ImageDetail({title, src, score}) {
  return (
    <View>
      <Text>{title}</Text>
      <Image source ={src}/>
      <Text>Score : {score}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  })