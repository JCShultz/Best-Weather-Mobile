import React, { Component } from "react";
import { StyleSheet, Text, View, Button} from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "location1",
        "location2",
        "location3",
        "location4",
        "location5"
      ]
    }
  }

  userView = () => {
    this.props.view(false, true)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Saved Locations</Text>
        <StatusBar style="auto" />
        {this.state.list.map((item)=>{
          return <Button
            // onPress={()=>{this.locationView()}}
            title={item}
            color="#841584"
          />
        })}
        <Button
          onPress={() => { this.userView() }}
          title="back"
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
    justifyContent: 'center',
  },
  text: {
    color: "#841584",
    fontWeight: "bold",
    fontSize: "30pt",

  }
})

