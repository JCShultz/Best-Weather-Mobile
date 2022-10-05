import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

import Login from "./client/Login";
import Create from "./client/Create";
import User from "./client/User";
import Main from "./client/Main";
import SaveLocation from './client/SaveLocation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: false,
      mainView: true,
      createView: false,
      userView: false,
      saveLocationView: false,
      coordinates: {
        long:0,
        lat:0
      }
    }
  }

  //TODO:

  //PROTECTED BY LOGIN:
  //User screen
  //able to create lists, save, and filter based on ideal conditions

  //Build out Backend
  //express server
  //db setup(MONGO_DB)

  //API functionality



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

  SaveLocationView = (bool1, bool2, bool3) => {
    this.setState({
      saveLocationView: bool1,
      mainView: bool2,
      userView: bool3
    });
  }

  //This function:
  //updates the state by the coordinates of the long press
  UpdateCoordinates = (lat, long) =>{
    this.setState({
      coordinates: {
        lat: lat,
        long: long
      }
    })
  }



  render() {

    return (
      <>
        {this.state.mainView && <Main viewLogin={this.LoginView} viewCreate={this.CreateView} viewUser={this.UserView}/>}
        {this.state.loginView && <Login view={this.LoginView} />}
        {this.state.createView && <Create view={this.CreateView} />}
        {this.state.userView && <User view={this.UserView} viewSave={this.SaveLocationView} update={this.UpdateCoordinates}/>}
        {this.state.saveLocationView && <SaveLocation view={this.SaveView} coords={this.state.coordinates}/>}
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
    fontSize: "30pt"
  }
});
