import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: "false",
      mainView: "true",
      createView: "false"

    }
  }

  onComponentMount=()=>{

  }


  render() {
    let main = <View style={styles.container}>
      <Text>Best Weather Mobile App</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {this.state.mainView = "false"}}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {this.state.createView = "false"}}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    return (
      <>
        {this.state.mainView && main}
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
