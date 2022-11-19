import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

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

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Best Weather Mobile</Text>
      <Image
        source={require('../assets/lightning-png-44010.png')}
        style={{ width: '110%', height: '100%', position: 'absolute', zIndex: '-1'}}
      />
         </View>
      <StatusBar style="auto" />
      {!(props.log) && <View style={styles.buttons}>
        <Button
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
      </View>}
      {props.log && <View style={styles.buttons}>
        <Button
          onPress={() => { logOut() }}
          title="Log Out"
          color="#841584"
        />
        <Button
          onPress={() => { userView() }}
          title="Your Locations"
          color="#841584"
        />

      </View>}
      </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontWeight: "bold",
    color: '#841584',
    fontWeight: "bold",
    fontSize: "33pt",
    textShadowColor: 'darkseagreen',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: .75,
    paddingBottom: 250
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  }
})



export default Main;