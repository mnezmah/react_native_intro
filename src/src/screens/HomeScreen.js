import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Baloon</Text>
      <Button
        title='go to Component'
        onPress={() => navigation.navigate('Screen')}
        style={styles.btn}
      />
      <Button
        title='See my friends'
        onPress={() => navigation.navigate('List')}
        style={styles.btn}
      />
      <Button
        title='See my cards'
        onPress={() => navigation.navigate('Image')}
        style={styles.btn}
      />
      <Button
        title='Open counter'
        onPress={() => navigation.navigate('Counter')}
        style={styles.btn}
      />
      <Button
        title='Open color picker'
        onPress={() => navigation.navigate('Color')}
        style={styles.btn}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  btn: {
    marginVertical: 10
  }
});

export default HomeScreen;