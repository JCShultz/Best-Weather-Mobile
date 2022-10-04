import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const Main = (props) => {

  let loginView = () => {
    props.viewLogin(true,false);
  }

  let createView = () => {
    props.viewCreate(true,false);
  }

  return (
    <View style={styles.container}>
      <Text style={text.container}>Best Weather Mobile</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {loginView()}}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {createView()}}
        title="Create Account"
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
})

const text = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: "30pt"
  },
});

export default Main;