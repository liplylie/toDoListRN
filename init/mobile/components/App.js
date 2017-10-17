/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import ToDoList from "./toDoListEntries";
import { Tabs } from "../config/router.js";
import { connect } from 'react-redux';
 import store from '../store.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
 


class App extends Component {

  handleSubmit(text){

    let todo = text.nativeEvent.text
    console.log(todo,'submit')
    this.props.addToDo(todo)
  }


  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.welcome}>
          To Do List
        </Text>
          <TextInput
          style={{height: 20}}
          placeholder="Type to do here"
          onChangeText={(text) => console.log(text)}
          onSubmitEditing={this.handleSubmit.bind(this)}
        />
        {this.props.todo.map((todo, i)=>{return <ToDoList todo={todo} key={i}/> })}
        <Tabs style={{flex: 4, backgroundColor: 'yellow'}}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    width: 400,
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 10,
    backgroundColor: 'pink'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) =>{
  console.log(state.addTodo.todos, 'map state')
  return {
    todo: [...state.addTodo.todos, state.addTodo.todos]
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToDo: (todo) =>{
      dispatch({type: "ADD_TODO", payload: todo})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
