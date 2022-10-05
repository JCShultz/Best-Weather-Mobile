import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const SaveLocation = (props) =>{

  let changeView=()=>{
    props.view(false, true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Save Location</Text>
      </TouchableOpacity>
      <Text>{props.coords.lat}</Text>
      <Text>{props.coords.long}</Text>
      <Button
        onPress = {()=>{changeView()}}
        title="Back"
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
  input: {
    height: 60,
    width: '80%',
    padding: 8,
    margin: 5,
    fontSize: 16,
    backgroundColor: 'lightgrey'
  },
  btn: {
    padding: 9,
    margin: 5
  },
  btntext: {
    color: '#841584',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default SaveLocation;
