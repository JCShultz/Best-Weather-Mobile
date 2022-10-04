import React from 'react';
import { Text, View } from 'react-native';

const Login = () =>{
  return (
    <View style={styles.container}>
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
  )
}

export default Login;

