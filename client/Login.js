import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const Login = (props) =>{

  let changeView=()=>{
    props.view(false,true);
  }

  return (
    <View style={styles.container}>
      <Text>login screen</Text>
      <StatusBar style="auto" />
      <Button
        onPress = {()=>{changeView()}}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Login;

