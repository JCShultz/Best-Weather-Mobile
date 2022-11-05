import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from "axios";


const LocationDetail = (props) => {
  //should get location in props

  //changes the view back to user page
  let changeView = () => {
    props.view(false, true);
  }

  //changes the view back to user page and removes location from the list
  let changeViewDelete = (loc) => {
    props.delete(loc);
    props.view(false, true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.btntext}>{props.item.name}</Text>
      <Text>{props.item.lat}, {props.item.long}</Text>
      <ScrollView style={styles.scroll}>
        {props.forecasts.map((item) => {
          return <View style={styles.forecast} key={Math.random()}>
            <Text>{item.name}:</Text>
            <Text>{item.detailedForecast}</Text>
            <Text>Temperature: {item.temperature}</Text>
            <Text>Wind Speed: {item.windSpeed}</Text>
            <Text>Wind Direction: {item.windDirection}</Text>
          </View>
        })}

      </ScrollView>
      <Button
        onPress={() => { changeViewDelete(props.item.name) }}
        title="Remove Location"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => { changeView() }}
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
    overFlow: 'auto',
    paddingBottom: 40
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
    textAlign: 'center',
    paddingTop: 50
  },
  forecast: {
    padding: 20
  },
  scroll: {
    backgroundColor: 'grey'
  }
})

export default LocationDetail;
