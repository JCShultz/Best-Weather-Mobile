import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const Create = (props) =>{

  let changeView=()=>{
    props.view(false, true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput placeholder="username" style={styles.input}/>
      <TextInput placeholder="password" style={styles.input}/>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Create</Text>
      </TouchableOpacity>
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

export default Create;

