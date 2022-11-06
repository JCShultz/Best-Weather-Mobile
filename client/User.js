import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
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
      list: [
        "Boulder, CO",
        "Vedauwoo, WY",
        "Turkey Rocks, CO",
        "Red Cliff, CO",
        "Rocky Mountain National Park, CO"
      ],
      forecasts: [],
      wind: false,
      precip: false,
      temp: false
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
        .then((res)=>{
          this.setState({ forecasts: [...this.state.forecasts, {
            name: item.name,
            forecast: res.data,
            lat: item.lat,
            long: item.long
          }]})
        })
        .catch((err) => {
          console.log('could not get forecasts from NOAA: ', err);
        })
      })
    }else{
      this.props.list.map((item) => {
        let latitude = item.lat.toString();
        let longitude = item.long.toString();
        axios.post(`${config.ip}:${config.srvPort}/forecast`, {
          lat: latitude,
          long: longitude
        })
        .then((res)=>{
          this.setState({ forecasts: [...this.state.forecasts, {
            name: item.name,
            forecast: res.data,
            lat: item.lat,
            long: item.long
          }]})

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
    // const [selected, setSelected] = React.useState("");
    const menuItems = [
      {key:'1', value: 'wind speed'},
      {key:'2', value: 'precipitation'},
      {key:'3', value: 'temperature'}
    ];
    let list = this.props.list;
    //console.log('not logged list: ', this.props.list)
    if(this.props.loggedIn){
      list = this.props.userInfo[0].locations
    }
    console.log('yess',this.state.forecasts)

    return (
      <View style={[styles.container, {flexDirection: "column"}]}>
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
        <Text style={styles.text}>Saved Locations</Text>
        <SelectList
          data={menuItems}
          maxHeight={130}
          placeholder='sort list by:'
          // setSelected={(e)=>{console.log(e.nativeEvent)}}
          // onSelect={(e)=>{console.log(e.nativeEvent)}}
          search={false}
          boxStyles={{
            // backgroundColor:'lightpink',
            marginBottom: 10
          }}
          // inputStyles={{}}
        />
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
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    paddingBottom: 40
  },
  text: {
    color: "#841584",
    fontWeight: "bold",
    fontSize: "30pt",
    textShadowColor: 'black',
    textShadowOffset: { width: .75, height: .75 },
    textShadowRadius: .75
  },
  map: {
    marginBottom: 20,
    flex: 1,
    borderColor: 'black',
    borderWidth: 8,
    borderRadius: 15,
    margin: 10,
    marginTop: 50,
    width: '90%',
    // ...StyleSheet.absoluteFillObject
  },
  listItem: {
    display: 'inline block'
  }
})

