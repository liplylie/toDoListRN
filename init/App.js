/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import TouchDemo from "./mobile/components/toDoListEntries"

import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';



export default class App extends Component {

  handleSubmit(text){
    console.log(text.nativeEvent.text,'submit')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          To Do List
        </Text>
          <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => console.log(text)}
          onSubmitEditing={this.handleSubmit.bind(this)}
        />
        <TouchDemo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
