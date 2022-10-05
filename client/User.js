import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';


import { StatusBar } from 'expo-status-bar';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Boulder, CO",
        "Vedauwoo, WY",
        "Turkey Rocks, CO",
        "Red Cliff, CO",
        "Rocky Mountain National Park, CO"
      ]
    }
  }

  userView = () => {
    this.props.view(false, true)
  }

  SaveLocationView = () => {
    this.props.viewSave(true, false, false)
  }

  PassLocationCoordinate = (lat, long) => {
    this.props.update(lat,long)
  }


  //TODO:
  //ability to remove items from list
  //drop downs for sorting and list change (skiing/climbing)
  //sorting list by precip, cloud cover and others


  render() {
    return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            onLongPress={(e)=>{
              console.log(e.nativeEvent.coordinate);
              //modal for saving locations
              this.SaveLocationView();
              this.PassLocationCoordinate(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);

            }}
            region={this.props.coordinate}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsScale={true}
            showsCompass={true}
            userInterfaceStyle={'dark'}
        />
        <Text style={styles.text}>Saved Locations</Text>

        <StatusBar style="auto" />
        {this.state.list.map((item)=>{
          return <Button
            // onPress={()=>{}
            title={item}
            key={Math.random ()}
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
    textShadowColor: 'black',
    textShadowOffset: {width: .75, height: .75},
    textShadowRadius: .75
  },
  map: {
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15,
    margin: 10,
    marginTop: 40,
    height: '60%',
    ...StyleSheet.absoluteFillObject
  }
})

