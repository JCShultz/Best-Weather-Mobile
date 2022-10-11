import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import config from '../config.js';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'',
      pword:''
    }
  }
  //toggles login view
  changeView=()=>{
    this.props.view(false,true);
  }

  onUserChange=(text)=>{
    this.setState({
      user: text
    })
  }

  onPassChange=(text)=>{
    this.setState({
      pword: text
    })
  }

  login = ()=>{
    axios.post(`${config.ip}:${config.srvPort}/login`, {
      name: this.state.user,
      pass: this.state.pass
    })
    .then((res)=>{
      console.log('here', res);
      this.changeView();
    })
    .catch((err)=>{
      console.log('login', err);
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput placeholder="username" style={styles.input} onChangeText={(text)=>{this.onUserChange(text)}}/>
      <TextInput placeholder="password" style={styles.input} onChangeText={(text)=>{this.onPassChange(text)}}/>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext} onPress={this.login}>Login</Text>
      </TouchableOpacity>
      <Button
        onPress = {()=>{this.changeView()}}
        title="Back"
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
  input: {
    height: 60,
    width: '80%',
    padding: 8,
    paddingLeft: 20,
    margin: 5,
    fontSize: 16,
    backgroundColor: 'lightgrey',
    borderRadius: 10
  },
  btn: {
    padding: 9,
    margin: 5
  },
  btntext: {
    color: '#841584',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Login;

