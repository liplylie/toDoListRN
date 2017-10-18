
import React, { Component } from 'react'
import { 
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

export default class ToDoList extends Component {
  render() {
    console.log(this.props, 'props ToDoList')
    let message = this.props.todo.text;
    let status = ''
    if ( this.props.todo.completed){
      status = 'complete'
    } else if (this.props.todo.completed === false){
      status = 'incomplete'
    }
    
    return (
      <ScrollView>
        <View>
          <Text style={styles.toDoEntry}>{message} <Text style={styles.status}>{status}</Text></Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  toDoEntry: {
    flex: 1, 
    fontSize: 40,
    textAlign: "center"
   }, 
   status: {
    flex: 1, 
    justifyContent:"flex-end", 
    alignItems:"flex-end"
   }
})
