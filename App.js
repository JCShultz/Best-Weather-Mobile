import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

import Login from "./client/Login";
import Create from "./client/Create";
import User from "./client/User";
import Main from "./client/Main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: false,
      mainView: true,
      createView: false,
      userView: false
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

  render() {

    return (
      <>
        {this.state.mainView && <Main viewLogin={this.LoginView} viewCreate={this.CreateView} viewUser={this.UserView}/>}
        {this.state.loginView && <Login view={this.LoginView} />}
        {this.state.createView && <Create view={this.CreateView} />}
        {this.state.userView && <User view={this.UserView}/>}
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
