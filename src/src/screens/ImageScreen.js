import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'
import beach from '../../../assets/beach.jpg'
import forest from '../../../assets/forest.jpg'
import mountain from '../../../assets/mountain.jpg'


const ImageScreen = () => {
  return (
    <View>
      <ImageDetail 
        title="Beach" 
        src={beach}
        score="3"
        />
      <ImageDetail
        title="Forest"
        src={forest}
        score="5"
      />
      <ImageDetail
        title="Mountains"
        src={mountain}
        score="6"
      />
    </View>
  )
}
const styles = StyleSheet.create({

})

export default ImageScreen