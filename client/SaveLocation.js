import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import config from '../config.js';

class SaveLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  //changes view back to User page and passes location info the User page
  changeView = () => {
    if (this.props.userInfo[0].locations.length <= 4) {
      if (this.state.location.length > 0) {
        this.props.save(this.state.location, this.props.coords.lat, this.props.coords.long);
        if(this.props.login){
          this.addLocation(this.props.userInfo[0].name, this.state.location, this.props.coords.lat, this.props.coords.long);
        }
      }
    } else {
      alert('your only allowed 5 locations try removing one first')
    }
    this.props.view(false, true);
  }

  //adds location to user table in db
  addLocation = (name, locName, locLat, locLong) => {
    if (this.props.userInfo[0].locations.length <= 5) {
      axios.post(`${config.ip}:${config.srvPort}/location`, {
        name: name,
        locations: [
          {
            name: locName,
            lat: locLat.toString(),
            long: locLong.toString()
          }
        ]
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('error in location save: ', err)
        })
    } else {
      //alert('your only allowed 5 locations try removing one first')
    }
  }

  //uses input to update state
  updateState = (text) => {
    this.setState({
      location: text
    })
  }



  render() {
    //console.log('this: ', this.props.userInfo[0].locations.length)
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TextInput placeholder="enter name for location" style={styles.input} onChangeText={(text) => { this.updateState(text) }} />
        <Button
          onPress={
            () => {
              if (this.state.location.length > 0) {
                this.changeView();
              } else {
                alert('you must name your location')
              }
            }}
          title="Save Location"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={{ color: 'darkseagreen' }}>{this.props.coords.lat}</Text>
        <Text style={{ color: 'darkseagreen' }}>{this.props.coords.long}</Text>
        <Button
          onPress={
            () => {
              this.changeView();
            }
          }
          title="Back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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

export default SaveLocation;
