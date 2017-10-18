/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import ToDoList from "./toDoListEntries"

import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
 import { connect } from 'react-redux';
 import store from '../store.js'

// @connect((store)=>{

// })
class ToDo extends Component {

  handleSubmit(text){
    //console.log(text.target.val, 'press')
    let todo = text.nativeEvent.text
    console.log(todo,'submit')
    this.props.addToDo(todo)
    this.clearText()
    
  }

  clearText(){
    this._textInput.setNativeProps({text: ''});
  }


  render() {
    return (
      <ScrollView style={{backgroundColor: "lightblue"}} >
        <Text style={styles.welcome}>
          To Do List
        </Text>
          <TextInput
          ref={component => this._textInput = component}
          style={{height: 40, textAlign: 'center'}}
          placeholder="Type to do here"
          onChangeText={(text) => console.log(text)}
          onSubmitEditing={this.handleSubmit.bind(this)}
        />
        {this.props.todo.map((todo, i)=>{return <ToDoList todo={todo} key={i}/> })}
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
