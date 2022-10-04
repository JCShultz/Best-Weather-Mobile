import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const User = (props) => {

  let userView = () => {
    props.view(false, true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Page</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {userView()}}
        title="back"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#841584",
    fontWeight: "bold",
    fontSize: "30pt",

  }
})



export default User;