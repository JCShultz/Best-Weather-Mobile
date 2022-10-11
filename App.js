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
        long:0,
        lat:0
      },
      list: [],
      selectedItem: {},
      forecastInfo: [],
      createUser: ''
    }
  }

  //TODO:

  //PROTECTED BY LOGIN:
  //User screen
  //able to create lists, save, and filter based on ideal conditions

  //FRONTEND:
  //delete list items
  //add list items

  //BACKEND:
  //req handlers for db interactions
  //db functionality



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
  UpdateCoordinates = (lat, long) =>{
    this.setState({
      coordinates: {
        lat: lat,
        long: long
      }
    })
  }

  SaveLocation = (name, lat, long) => {
    if(this.state.list.length <= 4){
      this.state.list.push({name: name, lat: lat, long: long});
    } else {
      //ask to replace item in list
    }
  }



  render() {

    return (
      <>
        {this.state.mainView && <Main viewLogin={this.LoginView} viewCreate={this.CreateView} viewUser={this.UserView}/>}
        {this.state.loginView && <Login view={this.LoginView} />}
        {this.state.createView && <Create view={this.CreateView} />}
        {this.state.userView && <User view={this.UserView} viewSave={this.SaveLocationView} viewDetail={this.DetailView} update={this.UpdateCoordinates} list={this.state.list}/>}
        {this.state.saveLocationView && <SaveLocation view={this.SaveView} coords={this.state.coordinates} save={this.SaveLocation}/>}
        {this.state.locationDetailView && <LocationDetail view={this.DetailView} item={this.state.selectedItem} forecasts={this.state.forecastInfo}/>}
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
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 5
  }
});
