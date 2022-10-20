import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

import Login from "./client/Login";
import Create from "./client/Create";
import User from "./client/User";
import Main from "./client/Main";
import SaveLocation from './client/SaveLocation';
import LocationDetail from './client/LocationDetail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: false,
      mainView: true,
      createView: false,
      userView: false,
      saveLocationView: false,
      locationDetailView: false,
      coordinates: {
        long: 0,
        lat: 0
      },
      list: [],
      selectedItem: {},
      forecastInfo: [],
      createUser: '',
      userInfo: [],
      loggedIn: false
    }
  }

  //TODO -

  //User screen
  //able filter list based on ideal conditions

  //FRONTEND:
  //delete list items
  //hide password input
  //set 'passwordRules' check react native docs
  //ask if you are sure you want to delete location from user list


  //BACKEND:
  //hash passwords

  //These functions:
  //get passed down to sub components to enable movement from page to page

  LoginView = (bool1, bool2) => {
    this.setState({
      loginView: bool1,
      mainView: bool2
    });
  }

  CreateView = (bool1, bool2) => {
    this.setState({
      createView: bool1,
      mainView: bool2
    });
  }

  UserView = (bool1, bool2) => {
    this.setState({
      userView: bool1,
      mainView: bool2
    });
  }

  SaveView = (bool1, bool2) => {
    this.setState({
      saveLocationView: bool1,
      userView: bool2
    });
  }

  DetailView = (bool1, bool2, itemInfo, forecasts) => {
    this.setState({
      locationDetailView: bool1,
      userView: bool2,
      selectedItem: itemInfo,
      forecastInfo: forecasts
    });
  }

  SaveLocationView = (bool1, bool2, bool3) => {
    this.setState({
      saveLocationView: bool1,
      mainView: bool2,
      userView: bool3
    });
  }

  //This function:
  //updates the state by the coordinates of the long press on the map on the user page
  UpdateCoordinates = (lat, long) => {
    this.setState({
      coordinates: {
        lat: lat,
        long: long
      }
    })
  }

  SaveLocation = (name, lat, long) => {
    if (this.state.list.length <= 4) {
      this.state.list.push({ name: name, lat: lat, long: long });
      if (this.state.loggedIn) {
        this.state.userInfo[0].locations.push({ name: name, lat: lat, long: long });
      }
    } else {
      //ask to replace item in list
    }
  }

  UpdateUserInfo = (userInfo) => {
    this.setState({
      userInfo: userInfo,
      loggedIn: true
    })
  }

  LogOut = () => {
    this.setState({
      loggedIn: false,
      list: []
    }, console.log(this.state.loggedIn))
  }

  DeleteLoc = (loc) => {
    //TODO -
    //add delete request to server to remove user location from db in this function
    this.state.userInfo[0].locations.map((location, i)=>{
      console.log('checking: ', loc, location.name);
      if(location.name === loc){
        this.state.userInfo[0].locations.splice(location, 1);
      }
    })
    console.log(this.state.userInfo[0].locations)
  }


  render() {
    console.log("User is logged in: ", this.state.loggedIn, this.state.userInfo[0])
    return (
      <>
        {this.state.mainView && <Main viewLogin={this.LoginView} viewCreate={this.CreateView} viewUser={this.UserView} log={this.state.loggedIn} logOut={this.LogOut}/>}
        {this.state.loginView && <Login view={this.LoginView} update={this.UpdateUserInfo} />}
        {this.state.createView && <Create view={this.CreateView} />}
        {this.state.userView && <User view={this.UserView} viewSave={this.SaveLocationView} viewDetail={this.DetailView} update={this.UpdateCoordinates} list={this.state.list} userInfo={this.state.userInfo} loggedIn={this.state.loggedIn} />}
        {this.state.saveLocationView && <SaveLocation view={this.SaveView} coords={this.state.coordinates} save={this.SaveLocation} userInfo={this.state.userInfo} login={this.state.loggedIn}/>}
        {this.state.locationDetailView && <LocationDetail view={this.DetailView} item={this.state.selectedItem} forecasts={this.state.forecastInfo} delete={this.DeleteLoc}/>}
      </>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: "bold",
    fontSize: "30pt",
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5
  }
});
