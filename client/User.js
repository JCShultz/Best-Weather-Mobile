import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableOpacity } from 'react-native';
// import { SegmentedControl } from '@react-native-segmented-control/segmented-control';
import MapView from 'react-native-maps';
import SelectList from 'react-native-dropdown-select-list';
import LocationDetail from './LocationDetail';
import axios from 'axios';
import config from '../config.js';
import { StatusBar } from 'expo-status-bar';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      wind: false,
      precip: false,
      temp: false,
      sorter: ''
    }
  }

  //toggles back to main page
  userView = () => {
    this.props.view(false, true)
  }

  //toggles to location detail page and passes selected location info: {name: , lat: , long:} to APP
  viewDetail = (itemInfo, forecasts) => {
    this.props.viewDetail(true, false, itemInfo, forecasts)
  }

  //toggles the save location view
  SaveLocationView = () => {
    this.props.viewSave(true, false, false)
  }

  //passes the location coords to APP
  PassLocationCoordinate = (lat, long) => {
    this.props.update(lat, long)
  }

  //TODO:
  //drop downs for sorting and list change (skiing/climbing)
  //sorting list by precip, cloud cover and others

  //write algorithm that iterates through the detailed forecast of each item and find the word "precipitation"
  //then checks the percentage value after and sorts list bases on these values

  //sort by wind




  //gathers all forecast info for every location in list and adds to state
  GetForecasts = () => {
    if (this.props.loggedIn) {
      this.props.userInfo[0].locations.map((item) => {
        let latitude = item.lat.toString();
        let longitude = item.long.toString();
        axios.post(`${config.ip}:${config.srvPort}/forecast`, {
          lat: latitude,
          long: longitude
        })
          .then((res) => {
            this.setState({
              forecasts: [...this.state.forecasts, {
                name: item.name,
                forecast: res.data,
                lat: item.lat,
                long: item.long
              }]
            })
          })
          .catch((err) => {
            console.log('could not get forecasts from NOAA: ', err);
          })
      })
    } else {
      this.props.list.map((item) => {
        let latitude = item.lat.toString();
        let longitude = item.long.toString();
        axios.post(`${config.ip}:${config.srvPort}/forecast`, {
          lat: latitude,
          long: longitude
        })
          .then((res) => {
            this.setState({
              forecasts: [...this.state.forecasts, {
                name: item.name,
                forecast: res.data,
                lat: item.lat,
                long: item.long
              }]
            })

          })
          .catch((err) => {
            this.GetForecasts();
            console.log('could not get forecasts from NOAA: ', err);
          })
      })
    }
  }

  componentDidMount() {
    this.GetForecasts();
  }


  render() {

    let list = this.props.list;

    if (this.props.loggedIn) {
      list = this.props.userInfo[0].locations
    }


    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <Image
          source={require('../assets/lightning-png-44010.png')}
          style={{ width: '110%', height: '55%', position: 'absolute', zIndex: '-1' }}
        />
        <MapView
          style={styles.map}
          onLongPress={(e) => {
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
        {this.props.loggedIn && <Text style={styles.text}>Sort {this.props.userInfo[0].name}'s Locations By:</Text>}
        {!this.props.loggedIn && <Text style={styles.text}>Locations By:</Text>}

        <View style={styles.wrapper}>
          {['precip', 'temp', 'wind', 'sun'].map(weather => (
            <View key={weather} style={styles.weather}>
              <TouchableOpacity
                style={styles.outer}
                onPress={()=>{this.setState({sorter: weather})}}>
                {this.state.sorter === weather && <View style={styles.inner} />}
              </TouchableOpacity>
              <Text style={{ color: "#841584" }}>{weather}</Text>
            </View>
          ))}

        </View>


        <StatusBar style="auto" />
        {list.map((item) => {
          return <Button
            title={item.name}
            key={Math.random()}
            color="#841584"
            onPress={() => {
              this.state.forecasts.map((x) => {
                if (item.name === x.name) {
                  this.viewDetail(item, x.forecast)
                }
              })

            }}
          />
        })}
        <Button
          onPress={() => { this.userView() }}
          title="back to Main screen"
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
    // justifyContent: 'flex-end',
    paddingBottom: 40
  },
  text: {
    color: "#841584",
    fontWeight: "bold",
    fontSize: "25pt",
    textShadowColor: 'darkseagreen',
    textShadowOffset: { width: .75, height: .75 },
    textShadowRadius: .75
  },
  map: {
    marginBottom: 20,
    flex: 1,
    borderColor: '#841584',
    borderWidth: 8,
    borderRadius: 15,
    margin: 10,
    marginTop: 50,
    width: '90%',
    // ...StyleSheet.absoluteFillObject
  },
  listItem: {
    display: 'inline block'
  },
  inner: {
    width: 20,
    height: 20,
    backgroundColor: 'darkseagreen',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'

  },
  outer: {
    width: 30,
    height: 30,
    borderColor: '#841584',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    flexDirection: 'row',
    padding: 10
  },
  weather: {
    marginHorizontal: 20
  }
})

