import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const Main = (props) => {

  //These functions:
  //toggle state in App.js to change the view
  let loginView = () => {
    props.viewLogin(true, false);
  }
  let createView = () => {
    props.viewCreate(true, false);
  }
  let userView = () => {
    props.viewUser(true, false);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Best Weather Mobile</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => { loginView() }}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => { createView() }}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => { userView() }}
        title="Continue"
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
    fontWeight: "bold",
    fontSize: "30pt",
    color: '#841584',
    fontWeight: "bold",
    fontSize: "30pt",
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  }
})



export default Main;