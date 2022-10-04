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

  //turn these variables into functional components for separations of concerns

  //Login screen
  //will take you to the user screen
  //Create Account screen
  //will take you to the login screen


  //PROTECTED BY LOGIN:
  //User screen
  //able to create lists, save, and filter based on ideal conditions

  //flesh out sub-components
  //forms

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

  render() {
    let main = <View style={styles.container}>
      <Text style={text.container}>Best Weather Mobile</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          this.setState({
            loginView: true,
            mainView: false
          })
        }}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          this.setState({
            createView: true,
            mainView: false
          })
        }}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>


    return (
      <>
        {this.state.mainView && <Main viewLogin={this.LoginView} viewCreate={this.CreateView}/>}
        {/* {this.state.mainView && main} */}
        {this.state.loginView && <Login view={this.LoginView} />}
        {this.state.createView && <Create view={this.CreateView} />}
        {this.state.userView && user}
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
});


const text = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: "30pt"
  },
});
