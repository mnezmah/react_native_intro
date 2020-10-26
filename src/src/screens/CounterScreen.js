import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default CounterScreen = () => {
  const [counter, setCounter] = useState(0)
return (
  <View>
    <Button title="Increase" 
    onPress={() => {setCounter(counter+1)}}
    style={styles.button}
    />
    <Button title="Decrease" 
      onPress={()=>{setCounter(counter -1)}}/>
    <Text>Current Count:{counter}</Text>
  </View>
)
}
const styles = StyleSheet.create({
  button:{
    marginVertical: 10
  }
})


