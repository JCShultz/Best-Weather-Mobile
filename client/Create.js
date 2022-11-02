import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import axios from "axios";
import config from '../config.js';

import { StatusBar } from 'expo-status-bar';

export default class Create extends Component {
  constructor(props){
    super(props);
    this.state ={
      user: '',
      pword: ''
    }
  }

  changeView=()=>{
    this.props.view(false, true);
  }

  //creates new user ion DB
  createUser = (user, pword) => {
    axios.post(`${config.ip}:${config.srvPort}/user`, {
      name: this.state.user,
      pass: this.state.pword
    })
    .then((res)=>{
      console.log('response: ', res.data);
      if(res.data === 'user already exists'){
        alert('this user name already exists please choose another')
      }else{
        this.changeView();
      }

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  //sets state value to user field input
  onUserChange=(text)=>{
    this.setState({
      user: text
    })
  }

  //sets state value to password field input
  onPassChange=(text)=>{
    this.setState({
      pword: text
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput placeholder="username" style={styles.input} onChangeText={(text)=>{this.onUserChange(text)}}/>
      <TextInput placeholder="password" style={styles.input} onChangeText={(text)=>{this.onPassChange(text)}}/>
      <TouchableOpacity style={styles.btn} onPress={()=>{this.createUser()}}>
        <Text style={styles.btntext} >Create Account</Text>
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
    paddingLeft: 20,
    padding: 8,
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


