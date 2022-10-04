import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "false",
      main: "true"
    }
  }


  render() {
    let main = <View style={styles.container}>
      <Text>Best Weather Mobile</Text>
      <StatusBar style="auto" />
      <Button
        onPress={()=>this.state.main = "false"}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Create Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    return (
      <>
        {this.state.main && main}
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
