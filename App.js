import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: false,
      mainView: true,
      createView: false
    }
  }




  render() {
    let main = <View style={styles.container}>
      <Text>Best Weather Mobile App home screen</Text>
      <StatusBar style="auto" />
      <Button
        onPress = {()=>{this.setState({
          loginView: true,
          mainView: false
        })}}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
            onPress = {()=>{this.setState({
              createView: true,
              mainView: false
            })}}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    let login = <View style={styles.container}>
      <Text>login screen</Text>
      <StatusBar style="auto" />
      <Button
         onPress = {()=>{this.setState({
          loginView: false,
          mainView: true
        })}}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
        let create = <View style={styles.container}>
        <Text>create account screen</Text>
        <StatusBar style="auto" />
        <Button
              onPress = {()=>{this.setState({
                createView: false,
                mainView: true
              })}}
          title="Create"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    return (
      <>
        {this.state.mainView && main}
        {this.state.loginView && login}
        {this.state.createView && create}
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
