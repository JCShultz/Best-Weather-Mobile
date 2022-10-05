import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

import { StatusBar } from 'expo-status-bar';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "location1",
        "location2",
        "location3",
        "location4",
        "location5"
      ]
    }
  }

  userView = () => {
    this.props.view(false, true)
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        />
        <Text style={styles.text}>Saved Locations</Text>
        <StatusBar style="auto" />
        {this.state.list.map((item)=>{
          return <Button
            // onPress={()=>{this.locationView()}}
            title={item}
            color="#841584"
          />
        })}
        <Button
          onPress={() => { this.userView() }}
          title="back"
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
    flexDirection: 'column',
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40
  },
  text: {
    color: "#841584",
    fontWeight: "bold",
    fontSize: "30pt",
  },
  map: {
    margin: 20,
    height: '60%',
    ...StyleSheet.absoluteFillObject,
  }
})

