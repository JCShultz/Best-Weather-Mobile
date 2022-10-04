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
      <Text>Best Weather Mobile App</Text>
      <StatusBar style="auto" />
      <Button
        // onPress = {this.setState({
        //   mainView: false,
        //   loginVIew: true
        // })}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        // onPress={() => { this.state.createView = false }}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    let login = <View style={styles.container}>
      <Text>login</Text>
      <StatusBar style="auto" />
    </View>
    return (
      <>
        {this.state.mainView && main}
        {this.state.loginVew && login}
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
