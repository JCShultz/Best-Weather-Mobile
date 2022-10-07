import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const LocationDetail = (props) =>{
  //should get location in props

  let changeView = () => {
    props.view(false, true);
  }
  console.log(props);
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.btntext}>{props.item.name}</Text>
      <Text>{props.item.lat}, {props.item.long}</Text>
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
    paddingLeft: 20,
    margin: 5,
    fontSize: 16,
    backgroundColor: 'lightgrey',
    borderRadius: 10
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

export default LocationDetail;