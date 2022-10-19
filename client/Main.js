import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const Main = (props) => {

  //These functions:
  //toggle state in App.js to change the views
  let loginView = () => {
    props.viewLogin(true, false);
  }
  let createView = () => {
    props.viewCreate(true, false);
  }
  let userView = () => {
    props.viewUser(true, false);
  }
  let logOut = () => {
    props.logOut();
  }

  //console.log("main: ", props)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Best Weather Mobile</Text>
      <StatusBar style="auto" />
      {!(props.log) && <><Button
        onPress={() => { createView() }}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => { loginView() }}
        title="Log In"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
          <Button
        onPress={() => { userView() }}
        title="Continue"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </>}
      {props.log && <>
        <Button
          onPress={()=>{ logOut() }}
          title="Log Out"
          color="#841584"
        />
        <Button
          onPress={()=>{ userView() }}
          title="Back to User lists"
          color="#841584"
        />

      </>}

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
    textShadowOffset: {width: .75, height: .75},
    textShadowRadius: .75
  }
})



export default Main;