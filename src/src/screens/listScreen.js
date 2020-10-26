import React from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen  = () =>{
  let friends = [
    {name: 'Miro', age: 12},
    { name: 'Leposava', age: 55},
    { name: 'Juraj', age: 32},
    { name: 'Anita', age: 56},
    { name: 'Branka', age: 24},
    { name: 'Slavica', age: 45},
    { name: 'Hazim', age: 19},
    { name: 'Srecko', age: 36},
    { name: 'Jan', age: 28}
  ]
  return (
    <View>
      <Text>My friends</Text>
      <FlatList 
      horizontal = {false}
      showsHorizontalScrollIndicator = {false}
        data={friends}
        renderItem={({item})=>{
          return <Text style={styles.textStyle}>
                   {item.name} - Age {item.age}
                 </Text>
        }}
        keyExtractor={friend =>  friend.name}
        />
      
    </View>

  )
}

const styles =  StyleSheet.create({
textStyle: {
marginVertical: 50
}

})

export default ListScreen